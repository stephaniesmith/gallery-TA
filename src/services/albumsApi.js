import shortid from 'shortid';

const albums = [
  {
    id: shortid.generate(),
    title: 'Tiny Cat',
    description: 'I\'m Tiny Cat, look at me cat',
    images: [
      {
        id: shortid.generate(),
        title: 'Yawns',
        description: 'Tiny Cat is sleepy.',
        url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1540366_838889186129687_5309179525922601077_o.jpg?_nc_cat=0&oh=2595b8b1e810bddd5cd3c8d81e3a2c4a&oe=5BFE0394'
      },
      {
        id: shortid.generate(),
        title: 'Boxes',
        description: 'Tiny Cat like boxes.',
        url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/10923724_919022371449701_2378059482043996112_o.jpg?_nc_cat=0&oh=76b8bf627b393391e77ca56f9f78cf78&oe=5BFC7D87'
      },
      {
        id: shortid.generate(),
        title: 'Christmas',
        description: 'Tiny Cat is not a fan of Christmas.',
        url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/10623731_919022434783028_7347850655707964729_o.jpg?_nc_cat=0&oh=3d0c8b0608452820f1a30a8898f60de6&oe=5C34D44C'
      }
    ]
  },
  {
    id: shortid.generate(),
    title: 'Chicken',
    description: 'I\'m a pumpkin!',
    images: [
      // {
      //   id: shortid.generate(),
      //   title: 'Yawns',
      //   description: 'Tiny Cat is sleepy.',
      //   url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1540366_838889186129687_5309179525922601077_o.jpg?_nc_cat=0&oh=2595b8b1e810bddd5cd3c8d81e3a2c4a&oe=5BFE0394'
      // },
      // {
      //   id: shortid.generate(),
      //   title: 'Boxes',
      //   description: 'Tiny Cat like boxes.',
      //   url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/10923724_919022371449701_2378059482043996112_o.jpg?_nc_cat=0&oh=76b8bf627b393391e77ca56f9f78cf78&oe=5BFC7D87'
      // },
      // {
      //   id: shortid.generate(),
      //   title: 'Christmas',
      //   description: 'Tiny Cat is not a fan of Christmas.',
      //   url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/10623731_919022434783028_7347850655707964729_o.jpg?_nc_cat=0&oh=3d0c8b0608452820f1a30a8898f60de6&oe=5C34D44C'
      // }
    ]
  }
]

export default {
  getAlbums() {
    return albums;
  }
}