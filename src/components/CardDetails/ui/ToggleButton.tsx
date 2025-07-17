import More from 'assets/icon/More';

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ToggleButton = (props: ToggleButtonProps) => (
  <button
    onClick={() => props.onClick()}
    class="w-full text-center bg-white text-gray-500 text-sm py-0 flex items-baseline justify-center gap-2"
  >
    Детали
    <div class={props.isOpen ? 'rotate-180' : ''}>
      <More color="#99A6B5" />
    </div>
  </button>
);

export default ToggleButton;
