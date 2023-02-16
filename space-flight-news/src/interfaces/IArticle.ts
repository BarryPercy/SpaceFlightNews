import {ILaunch} from './ILaunch'
import {INewsSite} from './INewsSite'

export interface IArticle {

    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    INewsSite;
    summary:     string;
    publishedAt: Date;
    updatedAt:   Date;
    featured:    boolean;
    launches:    ILaunch[];
    events:      any[];
}