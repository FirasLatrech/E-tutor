export interface instructorType {
  id: string;
  username: string;
  pictureLink: string;
  job: string;
}

export interface sectionType {
  lessons: lessonType[] | null;
  title: string;
}

export interface videoLessonType {
  path: string;
  name:string;
  id: string;
}
export interface lessonType {
  title: string;
  Video: videoLessonType | null;
  File: string;
  Captions: string;
  Description: string;
  Notes: string;
}

export interface CourseInformationType {
  course_thumbnail: any;
  course_content: Object;
  target_audience: Object;
  course_requirements: Object;
  course_descriptions: string;
}

export interface messageType {
  congratulation_message: string;
  welcome_message:string;
}