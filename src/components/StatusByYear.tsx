import { SubjectTypes } from "../types/Subjects_Types";
import ProgressBar from "./ProgressBar";

type Props = {
  subjects: SubjectTypes[];
};

function StatusByYear({ subjects }: Props) {
  let firstYearSubjects = subjects.filter((e) => e.year === 1);
  let secondYearSubjects = subjects.filter((e) => e.year === 2);
  let thirdYearSubjects = subjects.filter((e) => e.year === 3);
  return (
    <ul className="flex flex-col items-center m-5 max-w-[100%]">
      <ProgressBar
        percentage={(
          firstYearSubjects.filter((e) => e.done === true).length /
          firstYearSubjects.length
        ).toLocaleString("en", { style: "percent" })}
        year="Primer Año"
      />
      {secondYearSubjects.filter((e) => e.done === true).length !== 0 && (
        <ProgressBar
          percentage={(
            secondYearSubjects.filter((e) => e.done === true).length /
            secondYearSubjects.length
          ).toLocaleString("en", { style: "percent" })}
          year="Segundo Año"
        />
      )}
      {thirdYearSubjects.filter((e) => e.done === true).length !== 0 && (
        <ProgressBar
          percentage={(
            thirdYearSubjects.filter((e) => e.done === true).length /
            thirdYearSubjects.length
          ).toLocaleString("en", { style: "percent" })}
          year="Tercer Año"
        />
      )}
    </ul>
  );
}

export default StatusByYear;
