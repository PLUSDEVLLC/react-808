import { useEffect } from 'react'

const defaults = {
    '__app_visibility'     : 'visible',
    '__color_bg'           : '#505050',
    '__color_fg'           : '#f5f5f5',
    '__color_black'        : '#000',
    '__color_dark_grey'    : '#2e2e2e',
    '__color_light_grey'   : '#5d5d5d',
    '__color_highlight'    : '#37e147',
    '__base_font_size'     : 12,
    '__number_of_steps'    : 16,
    '__number_of_tracks'   : 4,
    '__grid_unit'          : 2,
    '__play_head_width'    : 2,
    '__form_element_height': 30,
    '__input_bpm_width'    : 45,
    '__step_height'        : 32,
    '__track_title_width'  : 120,
    '__note_width'         : 32,
    '__note_height'        : 49,
    '__note_border_size'   : 1,
    '__note_margin_vert'   : 5,
    '__note_margin_horz'   : 4,
}

const noteWidthFull = defaults.__note_width + defaults.__note_margin_horz * 2
const noteHeightFull = defaults.__note_height + defaults.__note_margin_vert * 2

const getNotesAreaWidthInPixels = (totalSteps) => noteWidthFull * totalSteps - (defaults.__play_head_width / 2)

const setProperty = (key, value) => document.documentElement.style.setProperty(key, value)

const setStyles = (totalSteps) => {
    defaults.__number_of_steps = totalSteps
    setProperty('--app-visibility', defaults.__app_visibility)
    setProperty('--color-bg', defaults.__color_bg)
    setProperty('--color-fg', defaults.__color_fg)
    setProperty('--color-black', defaults.__color_black)
    setProperty('--color-dark-grey', defaults.__color_dark_grey)
    setProperty('--color-light-grey', defaults.__color_light_grey)
    setProperty('--color-highlight', defaults.__color_highlight)
    setProperty('--base-font-size', defaults.__base_font_size + 'px')
    setProperty('--number-of-steps', defaults.__number_of_steps)
    setProperty('--play-head-width', defaults.__play_head_width + 'px')
    setProperty('--play-head-height', noteHeightFull * defaults.__number_of_tracks - (defaults.__note_margin_vert * 2) + 'px')
    setProperty('--spacer', defaults.__grid_unit * 5 + 'px')
    setProperty('--form-element-height', defaults.__form_element_height + 'px')
    setProperty('--button-pause-play-width', defaults.__form_element_height + 'px')
    setProperty('--input-bpm-width', defaults.__input_bpm_width + 'px')
    setProperty('--step-height', defaults.__step_height + 'px')
    setProperty('--track-title-width', defaults.__track_title_width + 'px')
    setProperty('--note-border-size', defaults.__note_border_size + 'px')
    setProperty('--note-width', defaults.__note_width + 'px')
    setProperty('--note-height', defaults.__note_height + 'px')
    setProperty('--note-margin-vert', defaults.__note_margin_vert + 'px')
    setProperty('--note-margin-horz', defaults.__note_margin_horz + 'px')
    setProperty('--note-width-full', noteWidthFull + 'px')
    setProperty('--left-gutter-size', defaults.__track_title_width + defaults.__grid_unit * 5 * 2 + 'px')
    setProperty('--all-note-widths', (noteWidthFull) * defaults.__number_of_steps + 'px')
    setProperty('--app-max-width', (defaults.__track_title_width + defaults.__grid_unit * 5 * 2) + ((defaults.__note_width + defaults.__note_margin_horz * 2) * defaults.__number_of_steps) + 'px')
}

const useStyles = (totalSteps) => {
    useEffect(() => {
        setStyles(totalSteps)
    }, [totalSteps])
    return [getNotesAreaWidthInPixels]
}

export default useStyles
