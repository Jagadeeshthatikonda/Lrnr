import { v4 as uuidV4 } from "uuid";

import { ProfileSectionDetails } from "../../types/types";
//TODO: If data not generated form backend, then can use i18n for hard coded text that supports different languages

export const profileOptions: ProfileSectionDetails[] = [
  {
    id: uuidV4(),
    section: [
      {
        id: uuidV4(),
        value: "Dark Mode",
      },
      {
        id: uuidV4(),
        value: "Profile",
      },
    ],
  },

  {
    id: uuidV4(),
    section: [
      {
        id: uuidV4(),
        value: "What`s new",
      },
      {
        id: uuidV4(),
        value: "Help",
      },
      {
        id: uuidV4(),
        value: "Send feedback",
      },
      {
        id: uuidV4(),
        value: "Hints and shortcuts",
      },
    ],
  },

  {
    id: uuidV4(),
    section: [
      {
        id: uuidV4(),
        value: "Log out",
      },
    ],
  },
];
