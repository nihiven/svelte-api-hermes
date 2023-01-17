--[[
  This module is going to hold the windows, their contents, and related functionality
]]

local windows = {}

local defaults = {
  ["System"] = {
    ["show"] = true,
    ["text"] = {},
    ["menu"] = {
      ["File"] = {
        ["Quit"] = love.event.quit,
        ["Windows"] = {
          ["System"] = function() windows.toggle("System") end,
        },
      }
    }
  }
}


function windows.new(name, show)
      -- default values
    name = name or "new_window"
    show = show or true

    -- add to windows table
    local window  = {
        ["name"] = name,
        ["show"] = show,
        ["text"] = {
            ["buffer"] = {},
        },
    }
    return window
end

function windows:load()
  -- create windows
  -- window entries go in data
  -- global window properties sit right on windows such as windows.theme
  --[[
    create a text buffer, array >> {epoch, text}
    text should display in the window bottom to top
    text should autoscroll to the bottom
  ]]

  windows.data = {}
  windows.data["System"] = windows.new("System", true)
  windows.data["Connect"] = windows.new("Connect", true)
end

function windows.draw()
  -- loop through each window and draw text.buffer
  for k, v in pairs(windows.data) do
    if v.show then
      if imgui.Begin(v.name, nil, imgui.love.WindowFlags("AlwaysVerticalScrollbar", "MenuBar")) then
        for i = 1, #v.text.buffer, 1 do
          local line = v.text.buffer[i]
          local timestamp = ""
          if line.show_timestamp and gets("timestamp_enabled") then timestamp = get_timestamp(line.epoch).." " end
          imgui.TextWrapped(timestamp..line.text)
        end
        imgui.End()
      end
    end
  end
end

function windows.add_text(name, text, show_timestamp)
  -- add text to the window
  -- show_timestamp is optional
  -- if show_timestamp is true, then the timestamp will be added to the text
  -- if show_timestamp is false, then the timestamp will not be added to the text
  -- if show_timestamp is nil, then the timestamp will not be added to the text
  show_timestamp = show_timestamp or false
  table.insert(windows.data[name].text.buffer, {["epoch"] = os.time(), ["text"] = text, ["index"] = #windows.data[name].text.buffer + 1, ["show_timestamp"] = show_timestamp})
end

function windows.toggle(name)
  windows.data[name].show = not windows.data[name].show
end

function windows.inspect_test()
  -- test the inspect module
  local test = {
    ["a"] = 1,
    ["b"] = 2,
    ["c"] = 3,
  }
  --print(inspect(test))
  --print(inspect(SETTINGS))
end


return windows
