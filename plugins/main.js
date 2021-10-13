import "babel-polyfill";

import Vue from "vue";

import { handleToDetail } from "@/common/index";

Vue.prototype.$handleToDetail = handleToDetail;
