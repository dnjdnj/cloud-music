// components/musiclist/musiclist.js
const app = getApp()
Component({

  properties: {
    musiclist:Array
  },

  data: {
    playingId:-1
  },

  methods: {
    onSelect(event){
      const ds = event.currentTarget.dataset
      console.log(ds)
      this.setData({
        playingId:event.currentTarget.dataset.musicid
      })
      wx.navigateTo({
        url: `../../pages/player/player?musicId=${ds.musicid}&index=${ds.index}`,
      })
    }
  }
})
