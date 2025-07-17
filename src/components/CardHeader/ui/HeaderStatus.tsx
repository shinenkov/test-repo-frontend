import Message from 'assets/icon/Message';
import ArrowRight from 'assets/icon/ArrowRight';
import { Status } from 'types';
import { getColor } from 'utils';

const HeaderStatus = (props: { status: Status }) => {
  return (
    <div class="flex items-center gap-3 justify-between">
      <div class="flex items-center gap-3">
        <div
          class={`w-8 h-8 bg-${getColor(props.status).textColor}-100 rounded-lg flex items-center justify-center`}
        >
          <Message color={getColor(props.status).iconColor} size={16} />
        </div>
        <div class="flex items-center gap-2">
          {props.status === 'typing' && (
            <div class="flex gap-1">
              <div class="w-1 h-1 bg-green-200 rounded-full" />
              <div class="w-1 h-1 bg-green-300 rounded-full" />
              <div class="w-1 h-1 bg-green-400 rounded-full" />
            </div>
          )}
          <span
            class={`text-${getColor(props.status).textColor}-500 text-sm font-medium`}
          >
            {getColor(props.status).text}
          </span>
        </div>
      </div>
      {props.status === 'testing' && (
        <button class="flex items-baseline gap-1 bg-orange-100 text-orange-500 py-1 px-3 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors">
          {'Тестировать'}
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default HeaderStatus;
