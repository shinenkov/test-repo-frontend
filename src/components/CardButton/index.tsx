import Edit from 'assets/icon/Edit';

const SettingsButton = () => {
  return (
    <div>
      <button class="w-full bg-slate-800 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
        <Edit color="white" size={16} />
        {'Настройка чат-бота'}
      </button>
    </div>
  );
};

export default SettingsButton;
