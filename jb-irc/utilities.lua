--[[
  COLORS and related functions
]]
COLORS = { -- wow copilot nailed this
  ["pink"] = imgui.ImVec4_Float(1.0, 0.0, 1.0, 1.0),
  ["red"] = {1.0, 0.0, 0.0, 1.0},
  ["blue"] = {0.0, 0.0, 1.0, 1.0},
  ["green"] = {0.0, 1.0, 0.0, 1.0},
  ["yellow"] = {1.0, 1.0, 0.0, 1.0},
  ["white"] = {1.0, 1.0, 1.0, 1.0},
  ["black"] = {0.0, 0.0, 0.0, 1.0},
  ["gray"] = {0.5, 0.5, 0.5, 1.0},
  ["dark_gray"] = {0.25, 0.25, 0.25, 1.0},
  ["light_gray"] = {0.75, 0.75, 0.75, 1.0},
  ["orange"] = {1.0, 0.5, 0.0, 1.0},
  ["purple"] = {0.5, 0.0, 1.0, 1.0},
  ["brown"] = {0.5, 0.25, 0.0, 1.0},
  ["clear"] = {0.0, 0.0, 0.0, 0.0},
}
function color(color)
  -- return a color from the COLORS table
  -- if the color is not found, return white
  if COLORS[color] then
    return COLORS[color]
  else
    return COLORS["white"]
  end
end

--[[
  SETTINGS: user accessible settings via gets() and sets()
  settings are ENABLED
  windows are SHOW(N)
]]--
SETTINGS = {
  -- everywhere 'timestamp' means a formatted timestamp string
  -- 'epoch' is return value of os.time()
  ["timestamp_format"] = "[%I:%M.%S %p]",
  ["timestamp_color"] = COLORS["white"],
  ["timestamp_enabled"] = true,
  ["timestamp_show_seconds"] = true,
}
function gets(setting)
  return SETTINGS[setting]
end
function sets(setting, value)
  SETTINGS[setting] = value
end
function toggle(setting)
  SETTINGS[setting] = not SETTINGS[setting]
end
function enable(setting)
  SETTINGS[setting] = true
end
function disable(setting)
  SETTINGS[setting] = false
end

--[[
  HELPERS
  Generic helpers that are used in multiple places
  ]]
function print_info()
  print("PATH:" .. package.cpath)
end


function if_true(bool, char)
  if bool then
    return char
  else
    return ""
  end
end
function get_timestamp(epoch)
  return os.date(SETTINGS.timestamp_format, epoch)
end

function readDirectory(dir, callback)
  for file in love.filesystem.getDirectoryItems(dir) do
    callback(file)
  end
end

--[[
  MODULES
]]
MODULES = {
  ["data"] = {},
  ["add"] = function(self, module) table.insert(self.data, module) end,
  ["get"] = function(self, module) return self.data[module] end,
  ["run"] = function(self, callback, ...)
    for _, module in ipairs(self.data) do
       if module[callback] then
        module[callback](...)
      end
    end
  end
}

