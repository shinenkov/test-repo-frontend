type StatisticProps = {
  label: string;
  value: string | number;
  width?: string;
};

const Statistic = (props: StatisticProps) => (
  <div class="text-center">
    <div
      class={`text-sm font-normal text-gray-900 truncate ${props.width ?? ''}`}
    >
      {props.label}
    </div>
    <div class="text-2xl font-semibold text-gray-900">{props.value}</div>
  </div>
);

export default Statistic;
