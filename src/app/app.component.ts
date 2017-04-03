import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PostPage } from '../pages/post/post';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //make HomePage the root page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController){
    this.initializeApp();

    this.pages =[
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Post', component: PostPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
