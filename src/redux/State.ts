type MessagesDataType = {
    id: number
    message: string
}

type DialogsDataType = {
    id: number
    name: string
}

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    postData: PostDataType[]
}

type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It is my first post', likesCount: 20},
            {id: 3, message: 'Where is the Kaer Morhen?', likesCount: 50}
        ],
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Geralt'},
            {id: 2, name: 'Vesemir'},
            {id: 3, name: 'Eskel'},
            {id: 4, name: 'Lambert'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What happened?'},
        ]
    },
}