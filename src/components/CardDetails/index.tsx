import { createSignal, createEffect } from 'solid-js';
import { Transition } from 'solid-transition-group';

import { PostType } from 'types';
import { updatePostBody } from 'api/apiClient';
import { handleError } from 'utils';
import '../style.scss';
import ToggleButton from './ui/ToggleButton';

type DetailsProps = {
  post: PostType;
};

const Details = (props: DetailsProps) => {
  const [show, toggleShow] = createSignal(false);
  const [body, setBody] = createSignal('');
  const [isSaving, setIsSaving] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  createEffect(() => {
    if (show()) {
      setBody(props.post.body);
      setError(null);
    }
  });

  const handleBodyChange = (value: string) => {
    setError(null);
    setBody(value);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);
      await updatePostBody(props.post.id, body());
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
      setBody(props.post.body);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <ToggleButton isOpen={show()} onClick={() => toggleShow(!show())} />
      <Transition name="slide-fade">
        {show() && (
          <div class="py-2">
            <div class="text-sm text-gray-500">
              <span class="font-medium text-gray-900">ID: </span>
              {props.post.id}
            </div>
            <div class="text-sm text-gray-500">
              <span class="font-medium text-gray-900">Body: </span>
              <textarea
                value={body()}
                onInput={(e) => handleBodyChange(e.currentTarget.value)}
                class="w-full mt-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-gray-700"
                rows="3"
                disabled={isSaving()}
              />
              {error() && (
                <div class="text-red-500 text-xs mt-1">{error()}</div>
              )}
              <div class="mt-2 flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={isSaving()}
                  class={`px-4 py-2 rounded-lg transition-colors ${
                    isSaving()
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {isSaving() ? 'Сохранение...' : 'Сохранить'}
                </button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Details;
