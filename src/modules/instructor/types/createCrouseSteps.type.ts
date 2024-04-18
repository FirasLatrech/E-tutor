export interface instructorType {
  id: string;
  username: string;
  pictureLink: string;
  job: string;
}

export interface sectionType {
  lessons: lessonType[] | null;
  name: string;
}

export interface videoLessonType {
  url: string;
  file: File;
  id: string;
}
export interface lessonType {
  name: string;
  video: videoLessonType | null;
  File: string;
  captions: string;
  Description: string;
  Notes: string;
}

export interface CourseInformationType {
  CourseThumbnail: string;
  courseDescriptions: string;
  whatYouWillTeach: Object;
  targetAudience: Object;
  courseRequirements: Object;
}
