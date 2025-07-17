import ToggleSwitch from './ToggleSwitch';

type ChannelCardProps = {
  logo: string;
  name: string;
  username: string;
  enabled: boolean;
  onToggle: () => void;
};

const ChannelCard = (props: ChannelCardProps) => {
  return (
    <div class="flex items-center justify-between bg-gray-100 px-4 py-1 rounded-lg">
      <div class="flex items-center gap-3">
        <img src={props.logo} alt={`${props.name} Logo`} class="w-6 h-6" />
        <div>
          <div class="font-medium text-gray-900">{props.name}</div>
          <div class="text-sm text-gray-500">{props.username}</div>
        </div>
      </div>
      <ToggleSwitch enabled={props.enabled} onChange={props.onToggle} />
    </div>
  );
};

export default ChannelCard;
