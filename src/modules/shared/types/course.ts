export interface ICourse {
  id: number;
  title: string;
  subtitle: string | null;
  durations: string;
  course_thumbnail: string;
  rating: number;
  course_trailer: string;
  course_descriptions: {
    overview: string;
    objectives: string[];
    duration: string;
    format: string;
    level: string;
    certification: boolean;
    prerequisites: string[];
  };
  course_categories: {
    id: number;
    name: string;
    color: string;
    icon: string;
    create_by: number;
    background_color: string;
    courses_count: number;
    createdAt: string;
    deletedAt: string | null;
  };
  course_category?: {
    name: string;
  };
  course_content: { message: string };
  target_audience: { message: string };
  course_requirements: { message: string };
  course_curriculum: { message: string };
  welcome_message: string;
  course_level: {
    id: number;
    name: string;
    createdAt: Date;
    deletedAt: Date;
  };
  congratulation_message: string;
  course_price: string;
  enrollmentCount: number;
  discount: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
