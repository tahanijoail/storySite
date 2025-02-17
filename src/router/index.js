import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowesStories from '../views/BrowesStories.vue'
import Three_five from '@/components/Three_five.vue'
import Six_Eight from '@/components/Six_Eight.vue'
import Nine_eleven from '@/components/Nine_eleven.vue'
import Twelve_Fifteen from '@/components/Twelve_Fifteen.vue'
import StoryView from '../views/StoryView.vue'
import ListeningStory from '@/views/ListeningStory.vue'
import AboutSite from '@/views/AboutSite.vue'
import AddNewStory from '@/views/AddNewStory.vue'
import AllWritters from '@/views/AllWritters.vue'
import Writter from '@/views/WritterforReaer.vue'
import LoginForm from '@/views/LoginForm.vue'
import CreateAccount from '@/views/CreateAccountAsWritter.vue'
import CreateAccountAsWritter from '@/views/CreateAccountAsWritter.vue'
import CreateAccountAsReader from '@/views/CreateAccountAsReader.vue'
import UpdatePassword from '@/views/UpdatePassword.vue'
import UpdatePasswordUser from '@/views/UpdatePasswordUser.vue'
import FavoriteStories from '@/views/FavoriteStories.vue'
import ReviewStory from '@/components/ReviewStory.vue'
import WritterforReaer from '@/views/WritterforReaer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
     
    },
    {
      path: '/loginForm',
      name: 'loginForm',
      component: LoginForm,
     
    },
    {
      path: '/createAccountAsWritter',
      name: 'createAccountAsWritter',
      component: CreateAccountAsWritter,
     
    },
    {
      path: '/updatePassword',
      name: 'updatePassword',
      component: UpdatePassword,
     
    },
    {
      path: '/updatePasswordUser',
      name: 'updatePasswordUser',
      component: UpdatePasswordUser,
     
    },
    {
      path: '/createAccountAsReader',
      name: 'createAccountAsReader',
      component: CreateAccountAsReader,
     
    },
    {
      path: '/browesStories',
      name: 'browesStories',
      component: BrowesStories,
    },
    {
      path: '/aboutSite',
      name: 'aboutSite',
      component: AboutSite,
    },
    {
      path: '/review/:id',
      name: 'review',
      component: ReviewStory,
    },
    {
      path: '/review/edite/:id',
      name: 'edit-review',
      component: ReviewStory,
    },
    {
      path: '/stories/:id',
      name: 'story',
      component: StoryView,
    },
    {
      path: '/stories/addNewStory',
      name: 'addNewStory',
      component: AddNewStory,
    },
    {
      path: '/three_five',
      name: 'three_five',
      component: Three_five,
    },
    {
      path: '/six_eight',
      name: 'six_eight',
      component: Six_Eight,
    },
    {
      path: '/nine_eleven',
      name: 'nine_eleven',
      component: Nine_eleven,
    },
    {
      path: '/twelve_fifteen',
      name: 'twelve_fifteen',
      component: Twelve_Fifteen,
    },
    {
      path: '/listining_story',
      name: 'listining_story',
      component: ListeningStory,
    },
    {
      path: '/writter',
      name: 'writter',
      component: Writter,
    },
    {
      path: '/writterforReader',
      name: 'writterforReader',
      component: WritterforReaer,
    },
    {
      path: '/allWritters',
      name: 'allWritters',
      component: AllWritters,
    },
    {
      path: '/FavoritetoriesS',
      name: 'FavoritetoriesS',
      component: FavoriteStories,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/BrowesStories.vue'),
    // },
  ],
})

// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth && IsAuthintecated()){
//     next('/')
//   }
//  else{
//   next()
//  }
// })
// function IsAuthintecated(){
//   return localStorage.getItem('auth')==='true';
// }
export default router
