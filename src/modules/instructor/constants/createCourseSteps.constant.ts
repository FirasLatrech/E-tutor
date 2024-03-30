import AdvanceInforamationIcon from "../assets/icons/CreateCourse/AdvanceInforamationIcon";
import BasicInformationIcon from "../assets/icons/CreateCourse/BasicInformationIcon";
import CurriculumIcon from "../assets/icons/CreateCourse/CurriculumIcon";
import PublishCourseIcon from "../assets/icons/CreateCourse/PublishCourseIcon";
import AdvanceInformation from "../features/NewCourse/components/Steps/AdvanceInformation/AdvanceInformation";
import BasicInformation from "../features/NewCourse/components/Steps/BasicInformation/BasicInformation";
import Curriculum from "../features/NewCourse/components/Steps/Curriculum/Curriculum";
import PublishCourse from "../features/NewCourse/components/Steps/PublishCourse/PublishCourse";

export const CreateCourseSteps = [
  { text: 'Basic Information', Icon: BasicInformationIcon, Component: BasicInformation },
  { text: 'Advance Information', Icon: AdvanceInforamationIcon, Component: AdvanceInformation },
  { text: 'Curriculum', Icon:CurriculumIcon, Component: Curriculum },
  { text: 'Publish Course', Icon: PublishCourseIcon, Component: PublishCourse},
];
