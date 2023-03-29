type Props = {
  percentage: string;
  year: string;
};
function ProgressBar({ percentage, year }: Props) {
  return (
    <li className="w-96 m-1">
      <label htmlFor={year}>{year}</label>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: percentage }}
        >
          {percentage}
        </div>
      </div>
    </li>
  );
}

export default ProgressBar;
