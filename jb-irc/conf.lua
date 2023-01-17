function love.conf(t)
  t.window.title = "Hermes"

  t.console = true
  t.window.width = 1920
  t.window.height = 1080
  t.window.resizeable = true
  t.identity = 'GlitchRockHermes' -- save folder name
  t.appendidentity = false  -- Search files in source directory before save directory (boolean)

  -- enable as needed
  t.modules.timer = true
  t.modules.window = true
  t.modules.mouse = true
  t.modules.keyboard = true
  t.modules.graphics = true
  t.modules.image = true
  t.modules.event = true
  t.modules.system = true

  --- disabled
  t.modules.audio = false
  t.modules.data = false
  t.modules.font = false
  t.modules.joystick = false
  t.modules.math = false
  t.modules.physics = false
  t.modules.sound = false
  t.modules.thread = false
  t.modules.touch = false
  t.modules.video = false
end