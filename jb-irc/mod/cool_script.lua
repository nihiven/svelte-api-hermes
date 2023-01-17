local cool = {}

cool.manifest = {
  name = "cool_script",
  version = "1.0.0",
  patch = 0,
  author = "nihiven",
  description = "A cool script",
  dependencies = {}
}

function cool:load()
  -- change the size of the window to 1920x1080 if running on windows
  if love.system.getOS() == "Windows" then
    love.window.setMode(1920, 1080, {resizable=true, vsync=false, minwidth=400, minheight=300})
    print("Windows detected, setting window size to 1920x1080")
  else
    love.window.setMode(1280, 720, {resizable=true, vsync=false, minwidth=400, minheight=300})
    print("Not Windows, setting window size to 1280x720")
  end
end

return cool