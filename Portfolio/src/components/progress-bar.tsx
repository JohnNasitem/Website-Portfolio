const ProgressBar = ({ percent }: {percent: number}) => (
    <div className="w-full h-4 bg-[var(--color-bg-alt-accent)] rounded-full overflow-hidden">
      <div
        // className="h-full bg-gradient-to-r from-[var(--color-bg-alt-accent)] to-[var(--color-bg-alt-accent)]"
        className="h-full bg-[var(--color-foreground)]"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
);

export default ProgressBar;