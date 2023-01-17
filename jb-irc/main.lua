-- Make sure the shared library can be found through package.cpath before loading the module.
-- For example, if you put it in the LÖVE save directory, you could do something like this:
local lib_path = love.filesystem.getSaveDirectory() .. "/libraries"
local extension = jit.os == "Windows" and "dll" or jit.os == "Linux" and "so" or jit.os == "OSX" and "dylib"
package.cpath = string.format("%s;%s/?.%s", package.cpath, lib_path, extension)

-- load libraries
imgui = require "cimgui" -- cimgui is the folder containing the Lua module (the "src" folder in the github repository)
inspect = require 'lib.inspect' -- inspect is used to print tables in a readable format
ffi = require "ffi"
--local socket = require("socket")

-- load hermes components
require "utilities"

-- load Hermes Modules
-- do these here so modules will have access to global variables like SETTINGS/COLORS
windows = require "windows"
scripting = require "scripting"

MODULES:add(windows)
MODULES:add(scripting)

--local str0 = ffi.new("char[?]", "HELLO WORLD")



--[[---------------------------
    LOVE CALLBACKS
]]-----------------------------
love.load = function()
    imgui.love.Init() -- or imgui.love.Init("RGBA32") or imgui.love.Init("Alpha8")

    print_info()

    -- Hermes Modules
    MODULES:run("load")

    windows.add_text("System", "HERMES: Herald of the Gods\n ", false)
    windows.add_text("System", "--", true)
    windows.add_text("System", "Welcome to HERMES, the Herald of the Gods.", true)
    windows.add_text("System", "--", true)

    -- TODO: add wrapped text
    windows.add_text("System","HERMES is a Lua-based, cross-platform, open-source, extensible, and modular game engine. It is designed to be easy to use, and to be a good starting point for new game developers. It is also designed to be extensible, so that developers can add their own features and functionality. HERMES is built on top of the LÖVE framework, and uses the cimgui library to provide a GUI. HERMES is currently in development, and is not yet ready for public consumption. Please check back later.\n--")

end

love.draw = function()


  -- MainMenu
  if imgui.BeginMainMenuBar() then
      if imgui.BeginMenu("Windows") then
          if imgui.MenuItem_Bool("System", nil, windows.data["System"].show, true) then
              windows.toggle("System")
          end
          imgui.EndMenu()
      end -- Windows
      imgui.EndMainMenuBar()
  end -- MainMenu

  if (show_demo_window) then
      imgui.ShowDemoWindow()
  end

  MODULES:run("draw")

  imgui.Render()
  imgui.love.RenderDrawLists()
end

love.update = function(dt)
    imgui.love.Update(dt)
    imgui.NewFrame()
end

love.mousemoved = function(x, y, ...)
    imgui.love.MouseMoved(x, y)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here
    end
end

love.mousepressed = function(x, y, button, ...)
    imgui.love.MousePressed(button)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here
    end
end

love.mousereleased = function(x, y, button, ...)
    imgui.love.MouseReleased(button)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here
    end
end

love.wheelmoved = function(x, y)
    imgui.love.WheelMoved(x, y)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here
    end
end

love.keypressed = function(key, ...)
    imgui.love.KeyPressed(key)
    if not imgui.love.GetWantCaptureKeyboard() then
        imgui.love.RunShortcuts(key)
        if (key == "a") then
            add_system_window_text("test with timestamp", true)
        end
        if (key == "b") then
            add_system_window_text("test without timestamp", false)
        end
        if (key == "d") then
            toggle_demo_window()
        end
        if (key=="t") then
            print(inspect(system_window_text))
        end
        if (key=="s") then
            print(inspect(SETTINGS))
        end
    end
end

love.keyreleased = function(key, ...)
    imgui.love.KeyReleased(key)
    if not imgui.love.GetWantCaptureKeyboard() then
        -- your code here
    end
end

love.textinput = function(t)
    imgui.love.TextInput(t)
    if imgui.love.GetWantCaptureKeyboard() then
        -- your code here
    end
end

love.quit = function()
    return imgui.love.Shutdown()
end
