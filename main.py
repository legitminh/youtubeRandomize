from pytube import Playlist #library is imperfect, copy urls.txt in buffer before running the script, it will override
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

# import webbrowser
# import os

# os.system("xdg-open \"\" https://google.com")

PLAYLISTURL= 'https://www.youtube.com/playlist?list=PLP_Wb75xS9wDOChuGRBpuNSMIkrJ2FaeP'
playlist = Playlist(PLAYLISTURL)
print('Number of videos in playlist: %s' % len(playlist.video_urls))
videos = []
count = 0
mode = int(input("enter mode { 0: override file, 1: add new to file} ")) #1 saves time most
if mode == 0:
  for video in playlist.videos:
    # print(f'{count} {video.video_id}')
    # count += 1
    videos.append(f'{video.video_id},{video.title}')
  # for i in range(1): #get a random video 
  #     videoIndex = randint(0,len(playlist.video_urls)-1)
  #     src=playlist.video_urls[videoIndex]
  #     print(f'{videoIndex} src={src} >> {list(playlist.videos)[videoIndex].title}')
  urlFile= open('urls.txt','w')
  ## create playlist.txt
  # for i in range(playlist.length):
  #     print(f'{playlist.video_urls[i]} {str(playlist.videos[i].length)}\n')
  #     urlFile.write(f'{playlist.video_urls[i]} {str(playlist.videos[i].length)}\n')

  for video in videos:
      urlFile.write(video+'\n')
  #print('the last song is: ' + playlist.videos[-1].title)
  print('done')
  #playlist.download_all()

else:
  urlFile= open('urls.txt','r')
  oldfileLatestId = urlFile.readline().split(',')[0]
  fullOldFile = urlFile.read()
  for video in playlist.videos:
    print(f'{count} {video.video_id}')
    if video.video_id == oldfileLatestId:
      print('matched')
      break
    count += 1
    videos.append(f'{video.video_id},{video.title}')
  urlFile= open('urls.txt','w')
  for video in videos:
      urlFile.write(video+'\n')
  urlFile.write(fullOldFile)
    
