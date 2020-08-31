import { Injectable } from '@angular/core';


export class Menu {
  id: string;
  text: string;
  url?: string;
  items?: Menu[];

}

var MenuList: Menu[] = [
  {
  id: "1",
  text: "Personal Information",
  url: "/personalInfo",
  items: [
    { 
    id: "1_1",
    text: "Personal Information",
    url: "/basicInfo"
    }
   ]
  },

  {
    id: "2",
    text: "Professional Information",
    url: "/professionalInfo",
    items: [
      { 
      id: "2_1",
      text: "Educational Background",
      url: "/educationalBackground"
      },
      { 
      id: "2_2",
      text: "Final Year Project",
      url: "/fyp"
      },
      { 
      id: "2_3",
      text: "Internship",
      url: "/internship"
      },
      { 
      id: "2_4",
      text: "Job Experience",
      url: "/jobExperience"
      },
      { 
      id: "2_5",
      text: "Skills",
      url: "/skills"
      }
     ]
  }

];    


@Injectable({
  providedIn: 'root'
})

export class MenuService {

  getMenu(): Menu[] {
    return MenuList;
}
}
