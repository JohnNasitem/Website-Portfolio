const ProgressBar = ({ percent }: {percent: number}) => (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-green-800 to-green-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
);

export default ProgressBar;