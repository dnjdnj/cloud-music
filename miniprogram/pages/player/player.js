let musiclist = []
//正在播放的歌曲index
let playingIndex = 0
const backgroundAudioManger = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl:'',
    isPlaying:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(options.musicId,typeof(options.musicId))
    playingIndex = options.index
    musiclist = wx.getStorageSync('musiclist')

    this._loadMusicDetail(options.musicId)
  },

  togglePlaying(){
    if(this.data.isPlaying){
      backgroundAudioManger.pause()
    }else{
      backgroundAudioManger.play()
    }
    this.setData({
      isPlaying: !this.data.isPlaying
    })
  },

  _loadMusicDetail(musicId){

    let music = musiclist[playingIndex]
    console.log(music)
    wx.setNavigationBarTitle({
      title: music.name,
    })
    this.setData({
      picUrl:music.al.picUrl
    })
    wx.cloud.callFunction({
      name:'music',
      data:{
        musicId,
        $url:'musicUrl'
      }
    }).then((res) =>{
      console.log(res)
      const url = res.result.data[0].url
      if(url === null){
        wx.showToast({
          title: '没有权限播放',
        })
        backgroundAudioManger.pause()
        this.setData({
          isPlaying :false
        })
        return
      }
      backgroundAudioManger.src = url
      backgroundAudioManger.title = music.name
      backgroundAudioManger.coverImgUrl = music.al.picUrl
      backgroundAudioManger.singer = music.ar[0].name
      this.setData({
        isPlaying:true
      })
    })
  },

  onPrev(){
    backgroundAudioManger.pause()
    playingIndex--
    if(playingIndex < 0){
      playingIndex = musiclist.length-1
    }
    this._loadMusicDetail(musiclist[playingIndex].id)
  },
  onNext(){
    backgroundAudioManger.pause()
    playingIndex++
    if(playingIndex === musiclist.length){
      playingIndex = 0
    }
    this._loadMusicDetail(musiclist[playingIndex].id)
  },
})