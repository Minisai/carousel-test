require 'sinatra'
#require 'sinatra/assetpack'

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

#class App < Sinatra::Base
#  register Sinatra::AssetPack
#  assets do
#    js :application, [
#        '/js/jquery.min.js',
#    ]
#
#    css :application, [
#    ]
#  end
#
#  get '/' do
#    send_file File.join(settings.public_folder, 'index.html')
#  end
#end



