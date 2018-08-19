import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  refresh(event: any): void {
    console.log(event);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-refresher slot="fixed" onIonRefresh={(event) => this.refresh(event)}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic">Profile page</ion-button>
      </ion-content>
    ];
  }
}
