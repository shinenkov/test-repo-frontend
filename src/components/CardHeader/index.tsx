import { AxiosError } from 'axios';
import { For, Show } from 'solid-js';
import { CommentType, PostType, Status } from 'types';
import HeaderStatus from './ui/HeaderStatus';
import StatusIndicator from './ui/StatusIndicator';
import Statistic from './ui/Statistic';

type HeaderProps = {
  post: PostType;
  status: Status;
  comments: CommentType[] | [];
  isError?: boolean;
  isLoading?: boolean;
  error: AxiosError<unknown, unknown> | null;
};

const Header = (props: HeaderProps) => {
  const calculateEfficiency = () => {
    if (props.status !== 'typing' && props.status !== 'waiting') return '-';
    const processedCount = props.comments.filter(
      (comment) => comment.name.length > 40
    ).length;
    const totalCount = props.comments.length || 1;
    return `${(processedCount / totalCount) * 100}%`;
  };

  const getMessageCount = () => {
    if (props.status !== 'typing' && props.status !== 'waiting') return '-';
    return props.comments.length;
  };

  const getReadyCount = () => {
    if (props.status !== 'typing' && props.status !== 'waiting') return '-';
    return props.comments.filter((comment) => comment.name.length > 40).length;
  };

  const getStatistics = () => [
    { label: 'Сообщений', value: getMessageCount() },
    { label: 'Отработано', value: getReadyCount() },
    { label: 'Эффективность', value: calculateEfficiency(), width: 'w-[90px]' },
  ];

  return (
    <div class="gap-2 flex flex-col">
      {props.isError ? (
        <div class="h-4 text-red-500">
          Error: {props.error?.message ?? 'Unknown error'}
        </div>
      ) : (
        <div class="block w-full">
          <HeaderStatus status={props.status} />
        </div>
      )}

      <div class="flex align-center justify-between">
        <h2 class="text-xl font-semibold text-gray-900 capitalize tracking-wide truncate w-[280px]">
          {props.post.title}
        </h2>
        <StatusIndicator status={props.status} />
      </div>

      <Show
        when={!props.isLoading}
        fallback={
          <div class="w-full flex justify-center">
            <div class="h-12 loading" />
          </div>
        }
      >
        {props.isError ? (
          <div class="h-12 text-red-500">
            Error: {props.error?.message ?? 'Unknown error'}
          </div>
        ) : (
          <div class="flex justify-between">
            <For each={getStatistics()}>
              {(stat, index) => (
                <>
                  {index() > 0 && <div class="border-l border-gray-200 mx-2" />}
                  <Statistic {...stat} />
                </>
              )}
            </For>
          </div>
        )}
      </Show>
    </div>
  );
};

export default Header;
