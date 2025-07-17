import { createEffect, createSignal, For, Show } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import type { AxiosError } from 'axios';
import { fetchPosts } from 'api/apiClient';
import { PostType } from 'types';
import Card from 'components/Card';
import Loading from 'components/Loading';
import { AUTO_REFRESH_INTERVAL, handleError } from 'utils';

const PER_PAGE_OPTIONS = [4, 8, 12] as const;
type PerPageOption = (typeof PER_PAGE_OPTIONS)[number];

function List() {
  const [limit, setLimit] = createSignal<PerPageOption>(4);
  const page = 0;

  const query = createQuery<PostType[], AxiosError>(
    () => ['posts', limit(), page],
    () => fetchPosts(limit(), page),
    {
      refetchInterval: AUTO_REFRESH_INTERVAL + 100,
    }
  );

  createEffect(() => {
    if (query.isError) {
      handleError(query.error);
    }
  });

  const handleRefresh = async () => {
    try {
      await query.refetch();
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <>
      <div class="flex justify-between min-w-[344px] items-center mb-6">
        <button
          onClick={handleRefresh}
          disabled={query.isRefetching}
          class={`px-4 py-2 rounded-lg transition-colors ${
            query.isRefetching
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          <div class="flex items-center gap-2">
            {query.isRefetching ? 'Обновление...' : 'Обновить'}
          </div>
        </button>
        <div class="flex items-center gap-4">
          <span class="text-gray-600">Per page:</span>
          <div class="flex gap-2">
            <For each={PER_PAGE_OPTIONS}>
              {(option) => (
                <button
                  onClick={() => setLimit(option)}
                  class={`px-4 py-2 rounded-lg transition-colors ${
                    limit() === option
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {option}
                </button>
              )}
            </For>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4">
        <Show when={query.isError}>
          <div class="text-red-500">
            Error: {query.error?.message ?? 'Unknown error'}
          </div>
        </Show>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
          <Show when={!query.isLoading} fallback={<Loading />}>
            <For each={query?.data} fallback={<div>No items</div>}>
              {(post: PostType) => (
                <Card post={post} isRefetching={query.isRefetching} />
              )}
            </For>
          </Show>
        </div>
      </div>
    </>
  );
}

export default List;
