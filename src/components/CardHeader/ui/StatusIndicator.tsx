import Ring from 'assets/icon/Ring';
import { Status } from 'types';

interface StatusIndicatorProps {
  status: Status;
}

const StatusIndicator = (props: StatusIndicatorProps) => {
  return (
    <div
      class={`w-8 h-8 bg-${props.status === 'waiting' || props.status === 'typing' ? 'green' : 'gray'}-200 rounded-full flex items-center justify-center border border-${props.status === 'waiting' || props.status === 'typing' ? 'green' : 'gray'}-300`}
    >
      <div class="w-4 h-4">
        <Ring
          color={
            props.status === 'waiting' || props.status === 'typing'
              ? '#0CCA1F'
              : '#8695A7'
          }
          size={16}
        />
      </div>
    </div>
  );
};

export default StatusIndicator;
