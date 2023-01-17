--[[
  SCRIPTING MODULE
  This is our scripting engine. Let's figure out how to make this work.
  I'm using mIRC scripting as a reference.
  1. Load scripts from a directory
  2. Parse scripts for commands
  3. Create a command table
  4. Bind commands to functions

  * need to pass all callbacks to scripting engine

  scripting = require("scripting")
  scripting.load("cool_script.lua")
  scripting.draw()
  scripting.update()
  scripting.keypressed() -- etc
]]

local scripting = {
  scripts = {}
}

function scripting:load()
  -- loop through all files in the mod directory
  windows.add_text("System", "Loading scripts...", true)

  local files = love.filesystem.getDirectoryItems("mod")
  for k, v in pairs(files) do
    -- load the file
    local file = love.filesystem.load("mod/"..v)
    windows.add_text("System", "Load: "..v, true)
    -- run the file
    local test = file()
    print(inspect(test))
  end
end

return scripting