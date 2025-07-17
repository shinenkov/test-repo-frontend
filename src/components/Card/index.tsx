import Details from 'components/CardDetails';
import Channels from 'components/CardChannels';
import SettingsButton from 'components/CardButton';
import Header from 'components/CardHeader';
import { Transition } from 'solid-transition-group';
import { createQuery } from '@tanstack/solid-query';
import { fetchComments } from 'api/apiClient';

import { AxiosError } from 'axios';
import { createEffect, createSignal } from 'solid-js';
import { CommentType, PostType, Status } from 'types';
import { getStatus, handleError } from 'utils';
import '../style.scss';

type CardProps = {
  post: PostType;
  isRefetching?: boolean;
};

const Card = (props: CardProps) => {
  const [status, setStatus] = createSignal<Status>('typing');

  const query = createQuery<CommentType[], AxiosError>(
    () => [props.post.id, 'comments'],
    () => fetchComments(props.post.id)
  );

  createEffect(() => {
    if (props.isRefetching) {
      query.refetch();
    }
  });

  createEffect(() => {
    if (query.isError) {
      handleError(query.error);
    }
  });

  createEffect(() => {
    const data = query.data;
    if (data) {
      const currentStatus = getStatus(data);
      setStatus(currentStatus);
    }
  });

  return (
    <Transition name="slide-fade">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-3 sm:p-5 w-[330px] box-content gap-3 flex flex-col">
        <Header
          post={props.post}
          status={status()}
          comments={query.data ?? []}
          isLoading={query.isLoading}
          isError={query.isError}
          error={query.error}
        />
        <SettingsButton />
        <Channels status={status()} />
        <Details post={props.post} />
      </div>
    </Transition>
  );
};

export default Card;
