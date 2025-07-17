type ToggleSwitchProps = {
  enabled: boolean;
  onChange: () => void;
};

const ToggleSwitch = (props: ToggleSwitchProps) => {
  return (
    <div
      class={`relative inline-flex h-6 w-11 border items-center rounded-full cursor-pointer transition-colors ${
        props.enabled
          ? 'bg-green-300 border-green-400'
          : 'bg-white border-gray-300'
      }`}
      onClick={() => props.onChange()}
    >
      <span
        class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          props.enabled ? 'translate-x-6' : 'translate-x-1 bg-gray-600'
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
