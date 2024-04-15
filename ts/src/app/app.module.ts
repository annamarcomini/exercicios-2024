import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardLoginComponent } from './components/header/card-login/card-login.component';
import { AvatarComponent } from './components/header/avatar/avatar.component';
import { SelectComponent } from './components/header/select/select.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { AnsweredTopicComponent } from './components/discussion/answered-topic/answered-topic.component';
import { TopicComponent } from './components/discussion/topic/topic.component';
import { CommentsComponent } from './components/discussion/comments/comments.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardLoginComponent,
    AvatarComponent,
    SelectComponent,
    SidebarComponent,
    ContentComponent,
    ResumeComponent,
    DiscussionComponent,
    AnsweredTopicComponent,
    TopicComponent,
    CommentsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
