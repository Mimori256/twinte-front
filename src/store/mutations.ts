import { MutationTree } from "vuex";
import { User, RegisteredCourse } from "~/api/@types";
import { Select } from "~/components/ToggleButton.vue";
import { GlobalState } from ".";

export const mutations: MutationTree<GlobalState> = {
  setUser(state, user: User) {
    if (state.user !== null) {
      throw new Error("すでにユーザーが存在します。");
    }
    state.user = user;
  },
  setSidebar(state, show: boolean) {
    state.sidebar = show;
  },
  setCourses(state, courses: RegisteredCourse[]) {
    state.courses = courses;
  },
  setLabel(state, label: Select) {
    state.label = label;
  },
  deleteCourse(state, id: string) {
    state.courses = state.courses.filter((course) => course.id !== id);
  },
  addCourse(state, course: RegisteredCourse) {
    state.courses.push(course);
  },
  addCourses(state, courses: RegisteredCourse[]) {
    state.courses.concat(courses);
  },
};
