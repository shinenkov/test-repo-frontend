import { createSignal, For } from 'solid-js';
import Info from 'assets/icon/Info';
import { Status } from 'types/index';
import ChannelCard from './ui/ChannelCard';
import { Logos } from './constants/logos';

type ChannelsProps = {
  status: Status;
};

const Channels = (props: ChannelsProps) => {
  const [isEnabled, setIsEnabled] = createSignal(true);

  const renderConnectChannel = () => (
    <div class="flex items-center cursor-pointer justify-between bg-white border border-gray-300 px-4 py-1 rounded-lg">
      <div class="flex items-center gap-3 h-10 font-semibold text-gray-900">
        Подключить канал
      </div>
      <div class="flex items-center">
        <div class="flex -space-x-2">
          <For each={Object.entries(Logos)}>
            {([key, logo]) => (
              <div class="relative">
                <img
                  src={logo}
                  alt={`${key} Logo`}
                  class="w-6 h-6 rounded-full hover:z-10 transition-transform hover:scale-110"
                />
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="ml-2 text-sm text-gray-500">+8</div>
    </div>
  );

  return (
    <div>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-sm font-medium text-gray-500 tracking-wide">
          {'Каналы'.toUpperCase()}
        </span>
        <Info />
      </div>
      {props.status !== 'connect' ? (
        <ChannelCard
          logo={Logos.telegram}
          name="Telegram"
          username="@savvvvvl_bot"
          enabled={isEnabled()}
          onToggle={() => setIsEnabled(!isEnabled())}
        />
      ) : (
        renderConnectChannel()
      )}
    </div>
  );
};

export default Channels;
