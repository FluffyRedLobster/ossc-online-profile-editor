ossc_data = function () {
    const FW_VER_MAJOR      = 0;
    const FW_VER_MINOR      = 83;
    
    const USERDATA_KEY      = "USRDATA";
    const USERDATA_DIS_KEY  = "USRDISA";

    // ude_type
    const UDE_INITCFG       = 0;
    const UDE_PROFILE       = 1;

    // avinput_t
    const AV_TESTPAT        = 0;
    const AV1_RGBs          = 1;
    const AV1_RGsB          = 2;
    const AV1_YPBPR         = 3;
    const AV2_YPBPR         = 4;
    const AV2_RGsB          = 5;
    const AV3_RGBHV         = 6;
    const AV3_RGBs          = 7;
    const AV3_RGsB          = 8;
    const AV3_YPBPR         = 9;
    const AV_LAST           = 10;

    const SCANLINESTR_MAX   = 15;
    const SL_HYBRIDSTR_MAX  = 28;
    const H_MASK_MAX        = 255;
    const V_MASK_MAX        = 63;
    const HV_MASK_MAX_BR    = 15;
    const VIDEO_LPF_MAX     = 5;
    const SAMPLER_PHASE_MAX = 31;
    const SYNC_VTH_MAX      = 31;
    const VSYNC_THOLD_MIN   = 10;
    const VSYNC_THOLD_MAX   = 200;
    const SD_SYNC_WIN_MAX   = 255;
    const PLL_COAST_MAX     = 5;
    const REVERSE_LPF_MAX   = 31;
    const COARSE_GAIN_MAX   = 15;
    const OFFSET_GAIN_MAX   = 255;
    const LINELEN_TOL_MAX   = 255;

    const SL_MODE_MAX       = 2;
    const SL_TYPE_MAX       = 2;

    const AUDIO_GAIN_M12DB  = 0;
    const AUDIO_GAIN_0DB    = 12;
    const AUDIO_GAIN_12DB   = 24;
    const AUDIO_GAIN_MAX    = AUDIO_GAIN_12DB;

    const DEFAULT_VSYNC_THOLD    = 0x44;
    const DEFAULT_LINELEN_TOL    = 0x06;
    const DEFAULT_SAMPLER_PHASE  = 0x10;
    const DEFAULT_PRE_COAST      = 1;
    const DEFAULT_POST_COAST     = 0;
    const DEFAULT_SYNC_LPF       = 0;
    const DEFAULT_SYNC_VTH       = 0x0B;
    const DEFAULT_FINE_GAIN      = 26;
    const DEFAULT_FINE_OFFSET    = 0x80;
    const DEFAULT_COARSE_GAIN    = 0x8;

    const DEFAULT_ON             = 1;

    const H_TOTAL_MIN            = 300;
    const H_TOTAL_MAX            = 2800;
    const H_TOTAL_ADJ_MAX        = 5;
    const H_SYNCLEN_MIN          = 10;
    const H_SYNCLEN_MAX          = 255;
    const H_BPORCH_MIN           = 1;
    const H_BPORCH_MAX           = 255;
    const H_ACTIVE_MIN           = 200;
    const H_ACTIVE_MAX           = 1920;
    const V_SYNCLEN_MIN          = 1;
    const V_SYNCLEN_MAX          = 7;
    const V_BPORCH_MIN           = 1;
    const V_BPORCH_MAX           = 63;
    const V_ACTIVE_MIN           = 160;
    const V_ACTIVE_MAX           = 1200;

    // video_format
    const FORMAT_RGBS            = 0;
    const FORMAT_RGBHV           = 1;
    const FORMAT_RGsB            = 2;
    const FORMAT_YPbPr           = 3;


    // video_type
    const VIDEO_LDTV            = (1<<0);
    const VIDEO_SDTV            = (1<<1);
    const VIDEO_EDTV            = (1<<2);
    const VIDEO_HDTV            = (1<<3);
    const VIDEO_PC              = (1<<4);

    // video_group
    const GROUP_NONE            = 0;
    const GROUP_240P            = 1;
    const GROUP_384P            = 2;
    const GROUP_480I            = 3;
    const GROUP_480P            = 4;
    const GROUP_1080I           = 5;

    // mode_flags
    const MODE_INTERLACED     = (1<<0);
    const MODE_PLLDIVBY2      = (1<<1);
    const MODE_PT             = (1<<2);
    const MODE_L2             = (1<<3);
    const MODE_L2_512_COL     = (1<<4);
    const MODE_L2_320_COL     = (1<<5);
    const MODE_L2_256_COL     = (1<<6);
    const MODE_L2_240x360     = (1<<7);
    const MODE_L3_GEN_16_9    = (1<<8);
    const MODE_L3_GEN_4_3     = (1<<9);
    const MODE_L3_512_COL     = (1<<10);
    const MODE_L3_320_COL     = (1<<11);
    const MODE_L3_256_COL     = (1<<12);
    const MODE_L3_240x360     = (1<<13);
    const MODE_L4_GEN_4_3     = (1<<14);
    const MODE_L4_512_COL     = (1<<15);
    const MODE_L4_320_COL     = (1<<16);
    const MODE_L4_256_COL     = (1<<17);
    const MODE_L5_GEN_4_3     = (1<<18);
    const MODE_L5_512_COL     = (1<<19);
    const MODE_L5_320_COL     = (1<<20);
    const MODE_L5_256_COL     = (1<<21);

    const PAGESIZE            =    256;
    const PAGES_PER_SECTOR    =    256;
    const SECTORSIZE          =  (PAGESIZE*PAGES_PER_SECTOR);

    const MAX_USERDATA_ENTRY  = 15 // 16 sectors for userdata
    const MAX_PROFILE         = (MAX_USERDATA_ENTRY-1);

    const TVP_INTCLK_HZ       = 6500000;
    const TVP_EXTCLK_HZ       = 27000000;

    const PROFILE_NAME_LEN    = 12;
    const PROFILE_UNTITLED    = '<used>';

    const Av_config_struct = [
        { sl_mode:  ['uint8'] },
        { sl_type:  ['uint8'] },
        { sl_hybr_str:  ['uint8'] },
        { sl_method:  ['uint8'] },
        { sl_altern:  ['uint8'] },
        { sl_altiv:  ['uint8'] },
        { sl_str:  ['uint8'] },
        { sl_id:  ['uint8'] },
        { sl_cust_l_str_1:  ['uint8'] },
        { sl_cust_l_str_2:  ['uint8'] },
        { sl_cust_l_str_3:  ['uint8'] },
        { sl_cust_l_str_4:  ['uint8'] },
        { sl_cust_l_str_5:  ['uint8'] },
        { sl_cust_c_str_1:  ['uint8'] },
        { sl_cust_c_str_2:  ['uint8'] },
        { sl_cust_c_str_3:  ['uint8'] },
        { sl_cust_c_str_4:  ['uint8'] },
        { sl_cust_c_str_5:  ['uint8'] },
        { sl_cust_c_str_6:  ['uint8'] },
        { linemult_target:  ['uint8'] }, // unused
        { l2_mode:  ['uint8'] },
        { l3_mode:  ['uint8'] },
        { l4_mode:  ['uint8'] },
        { l5_mode:  ['uint8'] },
        { l5_fmt:  ['uint8'] },
        { pm_240p:  ['uint8'] },
        { pm_384p:  ['uint8'] },
        { pm_480i:  ['uint8'] },
        { pm_480p:  ['uint8'] },
        { pm_1080i:  ['uint8'] },
        { ar_256col:  ['uint8'] },
        { h_mask:  ['uint8'] },
        { v_mask:  ['uint8'] },
        { mask_br:  ['uint8'] },
        { tx_mode:  ['uint8'] },
        { hdmi_itc:  ['uint8'] },
        { s480p_mode:  ['uint8'] },
        { tvp_hpll2x:  ['uint8'] },
        { upsample2x:  ['uint8'] },
        { ypbpr_cs:  ['uint8'] },
        { sync_vth:  ['uint8'] },
        { linelen_tol:  ['uint8'] },
        { vsync_thold:  ['uint8'] },
        { sync_lpf:  ['uint8'] },
        { video_lpf:  ['uint8'] },
        { pre_coast:  ['uint8'] },
        { post_coast:  ['uint8'] },
        { full_tx_setup:  ['uint8'] },
        { vga_ilace_fix:  ['uint8'] },
        { reverse_lpf:  ['uint8'] },
        { audio_dw_sampl:  ['uint8'] },
        { audio_swap_lr:  ['uint8'] },
        { audio_gain:  ['uint8'] },
        { r_f_off:  ['uint8'] },
        { g_f_off:  ['uint8'] },
        { b_f_off:  ['uint8'] },
        { r_f_gain:  ['uint8'] },
        { g_f_gain:  ['uint8'] },
        { b_f_gain:  ['uint8'] },
        { c_gain:  ['uint8'] },
        { link_av:  ['uint8'] }
    ];
    
    const Mode_data_struct = [
        { name:  ['string', 10] },
        { h_active:  ['uint16'] },
        { v_active:  ['uint16'] },
        { h_total_adj:  ['uint16'] },
        { v_total:  ['uint16'] },
        { h_backporch:  ['uint8'] },
        { v_backporch:  ['uint8'] },
        { h_synclen:  ['uint8'] },
        { v_synclen:  ['uint8'] },
        { sampler_phase:  ['uint8'] },
        { type_group:  ['uint8'] },
        { flags:  ['uint32'] }
    ];
    
    const Ude_hdr_struct = [
        { userdata_key: ['string', 8] },
        { version_major:  ['uint8'] },
        { version_minor:  ['uint8'] },
        { type:  ['uint8'] }
    ];
    

    class Mode_data_t extends DataStruct {
        constructor(buffer, offset) {
            super(Mode_data_struct, buffer, offset);
        }
        
        static getSize() {
            return DataStruct.getSize(Mode_data_struct);
        }
        
        setData(data) {
            var new_data = {
                name: data.name,
                h_active: data.h_active,
                v_active: data.v_active,
                h_total_adj: (data.h_total_adj << 12) | data.h_total,
                v_total: data.v_total,
                h_backporch: data.h_backporch,
                v_backporch: data.v_backporch,
                h_synclen: data.h_synclen,
                v_synclen: data.v_synclen,
                sampler_phase: data.sampler_phase,
                type_group: (data.group << 5) | data.type,
                flags: data.flags
            };
            
            super.setData(new_data);

        }
        
        getData() {
            var data = super.getData();
            var new_data = {
                name: data.name,
                h_active: data.h_active,
                v_active: data.v_active,
                h_total: (data.h_total_adj & 0xFFF),
                h_total_adj: (data.h_total_adj >> 12) ,
                v_total: data.v_total,
                h_backporch: data.h_backporch,
                v_backporch: data.v_backporch,
                h_synclen: data.h_synclen,
                v_synclen: data.v_synclen,
                sampler_phase: data.sampler_phase,
                type: (data.type_group & 0x1F),
                group: (data.type_group >> 5),
                flags: data.flags
            };
            return new_data;
        }
        
    }
    
    class Mode_data_t_array extends DataStruct {
        constructor(buffer, offset) {
            var struct = [];
            var count = video_modes_def.length;
            for (var i=0; i < count; i++) {
                var name = ("mode"+i);
                struct[i]= {};
                struct[i][name] = ['class', Mode_data_t];
            }
            super(struct, buffer, offset);
        }
        
        static getSize() {
            return DataStruct.getSize(Mode_data_struct) * video_modes_def.length;
        }
    }
    
    class Avconfig_t extends DataStruct {
        constructor(buffer, offset) {
            super(Av_config_struct, buffer, offset);
        }
        
        static getSize() {
            return DataStruct.getSize(Av_config_struct);
        }
    }
        
    class Ude_hdr extends DataStruct {
        constructor(buffer, offset) {
            super(Ude_hdr_struct, buffer, offset);
        }

        static getSize() {
            return DataStruct.getSize(Ude_hdr_struct);
        }

        setData(d) {
            var data = {
                // Set USERDATA_DIS_KEY when disabled so this profile is skipped by the OSSC.
                userdata_key: (d.enabled ? USERDATA_KEY : USERDATA_DIS_KEY),
                version_major: d.major,
                version_minor: d.minor,
                type: d.type
            };

            super.setData(data);
        }
    }

    const Ude_profile_struct = [
        { ude_header: ['class', Ude_hdr] },
        { name:  ['string', PROFILE_NAME_LEN+1] },
        { avc_data_len: ['uint16'] },
        { vm_data_len: ['uint16'] },
        { avc: ['class', Avconfig_t] },
        { vm: ['class', Mode_data_t_array] }
    ];
    
    class Ude_profile extends DataStruct { 
        constructor() {
            super(Ude_profile_struct);
        }
        
        static getSize() {
            return DataStruct.getSize(Ude_profile_struct);
        }
        
        setData(major, minor, type, avc, vm, name, enabled) {
            var data = {
                ude_header: { major: major, minor: minor, type: type, enabled: enabled },
                name: name,
                avc_data_len: Avconfig_t.getSize(),
                vm_data_len: Mode_data_t_array.getSize(),
                avc: avc,
                vm: vm
            }
            super.setData(data);
        }
    }
    
    const values_off_on = [
        { value: 0, label: "Off"},
        { value: 1, label: "On"},
    ]

    const values_coast = [
        { value: 0, label: "0 lines"},
        { value: 1, label: "1 lines"},
        { value: 2, label: "2 lines"},
        { value: 3, label: "3 lines"},
        { value: 4, label: "4 lines"},
        { value: 5, label: "5 lines"},
    ]

    const values_l2l4l5mode = [
        { value: 0, label: "Generic 4:3"},
        { value: 1, label: "512x240 optim."},
        { value: 2, label: "320x240 optim."},
        { value: 3, label: "256x240 optim."},
    ]

    const avinput_str = [ 
            "Test pattern", 
            "AV1: RGBS", "AV1: RGsB", "AV1: YPbPr", 
            "AV2: YPbPr", "AV2: RGsB", 
            "AV3: RGBHV", "AV3: RGBS", "AV3: RGsB", "AV3: YPbPr", 
            "Last used"
    ];

    const settings = [ 
        { 
            name: "Video in proc",
            settings: [
                { 
                    id: "video_lpf",
                    label: "Video LPF",
                    type: "select", 
                    values: [
                        { value: 0, label: "Auto"},
                        { value: 1, label: "Off"},
                        { value: 2, label: "95MHz (HDTV II)"},
                        { value: 3, label: "35MHz (HDTV I)"},
                        { value: 4, label: "16MHz (EDTV)"},
                        { value: 5, label: "9MHz (SDTV)"},
                        
                    ] 
                },
                { 
                    id: "ypbpr_cs",
                    label: "YPbPr input Color Space",
                    type: "radio", 
                    values: [
                        { value: 0, label: "Rec. 601"},
                        { value: 1, label: "Rec. 709"},
                        { value: 2, label: "Auto"},
                    ] 
                },
                { 
                    id: "r_f_off",
                    label: "Red offset",
                    type: "range", 
                    min: 0,
                    max: OFFSET_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_FINE_OFFSET,
                },
                { 
                    id: "g_f_off",
                    label: "Green offset",
                    type: "range", 
                    min: 0,
                    max: OFFSET_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_FINE_OFFSET,
                },
                { 
                    id: "b_f_off",
                    label: "Blue offset",
                    type: "range", 
                    min: 0,
                    max: OFFSET_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_FINE_OFFSET,
                },
                { 
                    id: "r_f_gain",
                    label: "Red gain",
                    type: "range", 
                    min: 0,
                    max: OFFSET_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_FINE_GAIN,
                },
                { 
                    id: "g_f_gain",
                    label: "Green gain",
                    type: "range", 
                    min: 0,
                    max: OFFSET_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_FINE_GAIN,
                },
                { 
                    id: "b_f_gain",
                    label: "Blue gain",
                    type: "range", 
                    min: 0,
                    max: OFFSET_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_FINE_GAIN,
                },
                { 
                    id: "c_gain",
                    label: "Pre-ADC gain",
                    type: "range", 
                    min: 0,
                    max: COARSE_GAIN_MAX,
                    step: 1,
                    default_value: DEFAULT_COARSE_GAIN,
                },
            ]
        },
        { 
            name: "Sampling opt.",
            settings: [
                { 
                    id: "s480p_mode",
                    label: "480p in sampler",
                    type: "select", 
                    values: [
                        { value: 0, label: "Auto"},
                        { value: 1, label: "DTV 480p"},
                        { value: 2, label: "VESA 640x480@60"}
                    ] 
                },
                { 
                    id: "tvp_hpll2x",
                    label: "Allow TVP HPLL2x",
                    type: "radio", 
                    values: values_off_on,
                    default_value: DEFAULT_ON,
                },
                
                { 
                    id: "upsample2x",
                    label: "Allow upsample2x",
                    type: "radio", 
                    values: values_off_on,
                },
            ]
        },
        { 
            name: "Sync opt.",
            settings: [
                { 
                    id: "sync_lpf",
                    label: "Analog sync LPF",
                    type: "select", 
                    values: [
                        { value: 0, label: "2.5MHz (max)"},
                        { value: 1, label: "10MHz (med)"},
                        { value: 2, label: "33MHz (min)"},
                        { value: 3, label: "Off"},
                    ]
                },
                { 
                    id: "sync_vth",
                    label: "Analog sync Vth",
                    type: "range", 
                    min: 0,
                    max: SYNC_VTH_MAX,
                    step: 1,
                    default_value: DEFAULT_SYNC_VTH,
                    value_displ_func: "sync_vth_disp",
                },
                { 
                    id: "linelen_tol",
                    label: "Hsync tolerance",
                    type: "range", 
                    min: 0,
                    max: LINELEN_TOL_MAX,
                    step: 1,
                    default_value: DEFAULT_LINELEN_TOL,
                    value_displ_func: "intclks_to_time_disp",
                },
                { 
                    id: "vsync_thold",
                    label: "Vsync threshold",
                    type: "range", 
                    min: VSYNC_THOLD_MIN,
                    max: VSYNC_THOLD_MAX,
                    step: 1,
                    default_value: DEFAULT_VSYNC_THOLD,
                    value_displ_func: "intclks_to_time_disp",
                },
                { 
                    id: "pre_coast",
                    label: "H-PLL Pre-Coast",
                    type: "select", 
                    values: values_coast,
                    default_value: DEFAULT_PRE_COAST,
                },
                { 
                    id: "post_coast",
                    label: "H-PLL Post-Coast",
                    type: "select", 
                    values: values_coast,
                    default_value: DEFAULT_POST_COAST,
                },
            ]
        },
        { 
            name: "Output opt.",
            settings: [
                { 
                    id: "pm_240p",
                    label: "240p/288p proc",
                    type: "select", 
                    values: [
                        { value: 0, label: "Passthru"},
                        { value: 1, label: "Line2x"},
                        { value: 2, label: "Line3x"},
                        { value: 3, label: "Line4x"},
                        { value: 4, label: "Line5x"},
                    ],
                    default_value: 1,
                },
                { 
                    id: "pm_384p",
                    label: "384p proc",
                    type: "select", 
                    values: [
                        { value: 0, label: "Passthru"},
                        { value: 1, label: "Line2x"},
                        { value: 2, label: "Line2x 240x360"},
                        { value: 3, label: "Line3x 240x360"},
                    ],
                    default_value: 1,
                },
                { 
                    id: "pm_480i",
                    label: "480i/576i proc",
                    type: "select", 
                    values: [
                        { value: 0, label: "Passthru"},
                        { value: 1, label: "Line2x (bob)"},
                        { value: 2, label: "Line3x (laced)"},
                        { value: 3, label: "Line4x (bob)"},
                    ],
                    default_value: 1,
                },
                { 
                    id: "pm_480p",
                    label: "480p/576p proc",
                    type: "select", 
                    values: [
                        { value: 0, label: "Passthru"},
                        { value: 1, label: "Line2x"},
                    ],
                    default_value: 0,
                },
                { 
                    id: "pm_1080i",
                    label: "960i/1080i proc",
                    type: "select", 
                    values: [
                        { value: 0, label: "Passthru"},
                        { value: 1, label: "Line2x (bob)"},
                    ],
                    default_value: 1,
                },
                { 
                    id: "l2_mode",
                    label: "Line2x mode",
                    type: "select", 
                    values: values_l2l4l5mode,
                    default_value: 0,
                },
                { 
                    id: "l3_mode",
                    label: "Line3x mode",
                    type: "select", 
                    values: [
                        { value: 0, label: "Generic 16:9"},
                        { value: 1, label: "Generic 4:3"},
                        { value: 2, label: "512x240 optim."},
                        { value: 3, label: "320x240 optim."},
                        { value: 4, label: "256x240 optim."},
                    ],
                    default_value: 1,
                },
                { 
                    id: "l4_mode",
                    label: "Line4x mode",
                    type: "select", 
                    values: values_l2l4l5mode,
                    default_value: 0,
                },
                { 
                    id: "l5_mode",
                    label: "Line5x mode",
                    type: "select", 
                    values: values_l2l4l5mode,
                    default_value: 0,
                },
                { 
                    id: "l5_fmt",
                    label: "Line5x format",
                    type: "select", 
                    values: [
                        { value: 0, label: "1920x1080"},
                        { value: 1, label: "1600x1200"},
                        { value: 2, label: "1920x1200"},
                    ],
                    default_value: 0,
                },
                { 
                    id: "ar_256col",
                    label: "256x240 aspect",
                    type: "radio", 
                    values: [
                        { value: 0, label: "4:3"},
                        { value: 1, label: "8:7"},
                    ],
                    default_value: 0,
                },
                { 
                    id: "tx_mode",
                    label: "TX mode",
                    type: "radio", 
                    values: [
                        { value: 0, label: "HDMI (RGB)"},
                        { value: 1, label: "HDMI (YCbCr444)"},
                        { value: 2, label: "DVI"},
                    ],
                },
                { 
                    id: "hdmi_itc",
                    label: "HDMI ITC",
                    type: "radio", 
                    values: values_off_on,
                },
            ]
        },
        { 
            name: "Scanline opt.",
            settings: [
                { 
                    id: "sl_mode",
                    label: "Scanlines",
                    type: "select", 
                    values: [
                        { value: 0, label: "Off"},
                        { value: 1, label: "Auto"},
                        { value: 2, label: "On"}
                    ] 
                },
                { 
                    id: "sl_str",
                    label: "Sl. strength",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX,
                    step: 1,
                    value_displ_func: "sl_str_disp",
                },
                { 
                    id: "sl_hybr_str",
                    label: "Sl. hybrid str",
                    type: "range", 
                    min: 0,
                    max: SL_HYBRIDSTR_MAX,
                    step: 1,
                    value_displ_func: "sl_hybr_str_disp",
                },
                { 
                    id: "sl_method",
                    label: "Sl. method",
                    type: "radio", 
                    values: [
                        { value: 0, label: "Multiplication"},
                        { value: 1, label: "Subtraction"},
                    ]
                },
                { 
                    id: "sl_altern",
                    label: "Sl. alternating",
                    type: "radio", 
                    values: values_off_on,
                    default_value: DEFAULT_ON,
                },
                { 
                    id: "sl_id",
                    label: "Sl. alignment",
                    type: "radio", 
                    values: [
                        { value: 0, label: "Top"},
                        { value: 1, label: "Bottom"},
                    ]
                },
                { 
                    id: "sl_altiv",
                    label: "Sl. alt interval",
                    type: "radio", 
                    values: values_off_on,
                },
                { 
                    id: "sl_type",
                    label: "Sl. type",
                    type: "select", 
                    values: [
                        { value: 0, label: "Horizontal"},
                        { value: 1, label: "Vertical"},
                        { value: 2, label: "Horiz. + Vert."},
                        { value: 3, label: "Custom"},
                    ]
                },
            ]
        },
        { 
            name: "Custom Scanline opt.",
            settings: [
                { 
                    id: "sl_cust_l_str_1",
                    label: "Sub-line 1 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_l_str_2",
                    label: "Sub-line 2 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_l_str_3",
                    label: "Sub-line 3 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_l_str_4",
                    label: "Sub-line 4 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_l_str_5",
                    label: "Sub-line 5 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_c_str_1",
                    label: "Sub-column 1 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_c_str_2",
                    label: "Sub-column 2 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_c_str_3",
                    label: "Sub-column 3 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_c_str_4",
                    label: "Sub-column 4 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_c_str_5",
                    label: "Sub-column 5 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
                { 
                    id: "sl_cust_c_str_6",
                    label: "Sub-column 6 str",
                    type: "range", 
                    min: 0,
                    max: SCANLINESTR_MAX+1,
                    step: 1,
                    value_displ_func: "sl_cust_str_disp",
                },
            ]
        },
        { 
            name: "Post proc.",
            settings: [
                { 
                    id: "h_mask",
                    label: "Horizontal mask",
                    type: "range", 
                    min: 0,
                    max: H_MASK_MAX,
                    step: 1,
                },
                { 
                    id: "v_mask",
                    label: "Vertical mask",
                    type: "range", 
                    min: 0,
                    max: V_MASK_MAX,
                    step: 1,
                },
                { 
                    id: "mask_br",
                    label: "Mask brightness",
                    type: "range", 
                    min: 0,
                    max: HV_MASK_MAX_BR,
                    step: 1,
                },
                { 
                    id: "reverse_lpf",
                    label: "Reverse LPF",
                    type: "range", 
                    min: 0,
                    max: REVERSE_LPF_MAX,
                    step: 1,
                },
            ]
        },
        { 
            name: "Compatibility",
            settings: [
                { 
                    id: "full_tx_setup",
                    label: "Full TX setup",
                    type: "radio", 
                    values: values_off_on,
                },
                { 
                    id: "vga_ilace_fix",
                    label: "AV3 interlacefix",
                    type: "radio", 
                    values: values_off_on,
                },
            ]
        },
        { 
            name: "Audio options",
            settings: [
                { 
                    id: "audio_dw_sampl",
                    label: "Down-sampling",
                    type: "radio", 
                    values: [
                        { value: 0, label: "Off (fs = 96kHz)"},
                        { value: 1, label: "2x (fs = 48kHz)"},
                    ],
                    default_value: DEFAULT_ON,
                },
                { 
                    id: "audio_swap_lr",
                    label: "Swap left/right",
                    type: "radio", 
                    values: values_off_on,
                },
                { 
                    id: "audio_gain",
                    label: "Pre-ADC gain",
                    type: "range", 
                    min: 0,
                    max: AUDIO_GAIN_MAX,
                    step: 1,
                    default_value: AUDIO_GAIN_0DB,
                    value_displ_func: "aud_db_disp",
                },
            ]
        },
        { 
            name: "Settings",
            settings: [
                { 
                    id: "link_av",
                    label: "Link prof->input",
                    type: "select", 
                    values: [
                        { value: AV_LAST, label: "No link" },
                        { value: AV1_RGBs, label: avinput_str[AV1_RGBs] },
                        { value: AV1_RGsB, label: avinput_str[AV1_RGsB] },
                        { value: AV1_YPBPR, label: avinput_str[AV1_YPBPR] },
                        { value: AV2_YPBPR, label: avinput_str[AV2_YPBPR] },
                        { value: AV2_RGsB, label: avinput_str[AV2_RGsB] },
                        { value: AV3_RGBHV, label: avinput_str[AV3_RGBHV] },
                        { value: AV3_RGBs, label: avinput_str[AV3_RGBs] },
                        { value: AV3_RGsB, label: avinput_str[AV3_RGsB] },
                        { value: AV3_YPBPR, label: avinput_str[AV3_YPBPR] },
                        
                    ],
                    default_value: AV_LAST,
                },
            ]
        },
            
    ]

    // size 924 bytes
    const video_modes_def = [
        /* 240p modes */ 
        [ "1600x240",   1600,  240,  2046, 0, 262,  202, 15,  150, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L5_GEN_4_3 | MODE_PLLDIVBY2) ], 
        [ "1280x240",   1280,  240,  1560, 0, 262,  170, 15,   72, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L3_GEN_16_9 | MODE_L4_GEN_4_3 | MODE_PLLDIVBY2) ],
        [ "960x240",     960,  240,  1170, 0, 262,  128, 15,   54, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L3_GEN_4_3 | MODE_PLLDIVBY2) ],
        [ "512x240",     512,  240,   682, 0, 262,   77, 14,   50, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L2_512_COL | MODE_L3_512_COL | MODE_L4_512_COL | MODE_L5_512_COL) ],
        [ "320x240",     320,  240,   426, 0, 262,   49, 14,   31, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L2_320_COL | MODE_L3_320_COL | MODE_L4_320_COL | MODE_L5_320_COL) ],
        [ "256x240",     256,  240,   341, 0, 262,   39, 14,   25, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L2_256_COL | MODE_L3_256_COL | MODE_L4_256_COL | MODE_L5_256_COL) ],
        [ "240p",        720,  240,   858, 0, 262,   57, 15,   62, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_PT | MODE_L2 | MODE_PLLDIVBY2) ],
        /* 288p modes */
        [ "1600x240L",  1600,  240,  2046, 0, 312,  202, 41,  150, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L5_GEN_4_3 | MODE_PLLDIVBY2) ],
        [ "1280x288",   1280,  288,  1560, 0, 312,  170, 15,   72, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L3_GEN_16_9 | MODE_L4_GEN_4_3 | MODE_PLLDIVBY2) ],
        [ "960x288",     960,  288,  1170, 0, 312,  128, 15,   54, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L3_GEN_4_3 | MODE_PLLDIVBY2) ],
        [ "512x240LB",   512,  240,   682, 0, 312,   77, 41,   50, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L3_512_COL | MODE_L4_512_COL | MODE_L5_512_COL) ],
        [ "320x240LB",   320,  240,   426, 0, 312,   49, 41,   31, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L2_320_COL | MODE_L3_320_COL | MODE_L4_320_COL | MODE_L5_320_COL) ],
        [ "256x240LB",   256,  240,   341, 0, 312,   39, 41,   25, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_L2_256_COL | MODE_L3_256_COL | MODE_L4_256_COL | MODE_L5_256_COL) ],
        [ "288p",        720,  288,   864, 0, 312,   69, 19,   63, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_240P,     (MODE_PT | MODE_L2 | MODE_PLLDIVBY2) ],
        /* 360p: GBI */ 
        [ "480x360",     480,  360,   600, 0, 375,   63, 10,   38, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_EDTV),              GROUP_384P,     (MODE_PT | MODE_L2 | MODE_PLLDIVBY2) ],
        [ "240x360",     256,  360,   300, 0, 375,   24, 10,   18, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_EDTV),              GROUP_384P,     (MODE_L2_240x360 | MODE_L3_240x360) ],
        /* 384p: Sega Model 2 */
        [ "384p",        496,  384,   640, 0, 423,   50, 29,   62, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_EDTV),              GROUP_384P,     (MODE_PT | MODE_L2 | MODE_PLLDIVBY2) ],
        /* 640x400, VGA Mode 13h */
        [ "640x400",     640,  400,   800, 0, 449,   48, 36,   96, 2,  DEFAULT_SAMPLER_PHASE, VIDEO_PC,                  GROUP_384P,     (MODE_PT | MODE_L2) ],
        /* 384p: X68k @ 24kHz */
        [ "640x384",     640,  384,   800, 0, 492,   48, 63,   96, 2,  DEFAULT_SAMPLER_PHASE, VIDEO_PC,                  GROUP_384P,     (MODE_PT | MODE_L2 | MODE_PLLDIVBY2) ],
        /* ~525-line modes */
        [ "480i",        720,  240,   858, 0, 525,   57, 15,   62, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_480I,     (MODE_PT | MODE_L2 | MODE_L3_GEN_16_9 | MODE_L4_GEN_4_3 | MODE_PLLDIVBY2 | MODE_INTERLACED) ],
        [ "480p",        720,  480,   858, 0, 525,   60, 30,   62, 6,  DEFAULT_SAMPLER_PHASE, (VIDEO_EDTV | VIDEO_PC),   GROUP_480P,     (MODE_PT | MODE_L2) ],
        [ "640x480",     640,  480,   800, 0, 525,   48, 33,   96, 2,  DEFAULT_SAMPLER_PHASE, (VIDEO_PC | VIDEO_EDTV),   GROUP_480P,     (MODE_PT | MODE_L2) ],
        /* X68k @ 31kHz */
        [ "640x512",     640,  512,   800, 0, 568,   48, 28,   96, 2,  DEFAULT_SAMPLER_PHASE, (VIDEO_PC | VIDEO_EDTV),   GROUP_480P,     (MODE_PT | MODE_L2) ],
        /* ~625-line modes */
        [ "576i",        720,  288,   864, 0, 625,   69, 19,   63, 3,  DEFAULT_SAMPLER_PHASE, (VIDEO_SDTV | VIDEO_PC),   GROUP_480I,     (MODE_PT | MODE_L2 | MODE_L3_GEN_16_9 | MODE_L4_GEN_4_3 | MODE_PLLDIVBY2 | MODE_INTERLACED) ],
        [ "576p",        720,  576,   864, 0, 625,   68, 39,   64, 5,  DEFAULT_SAMPLER_PHASE, VIDEO_EDTV,                GROUP_480P,     (MODE_PT | MODE_L2) ], 
        [ "800x600",     800,  600,  1056, 0, 628,   88, 23,  128, 4,  DEFAULT_SAMPLER_PHASE, VIDEO_PC,                  GROUP_NONE,     MODE_PT ],
        /* 720p modes */
        [ "720p",       1280,  720,  1650, 0, 750,  220, 20,   40, 5,  DEFAULT_SAMPLER_PHASE, (VIDEO_HDTV | VIDEO_PC),   GROUP_NONE,     MODE_PT ],
        /* VESA XGA and SXGA modes */
        [ "1024x768",   1024,  768,  1344, 0,  806,  160, 29,  136, 6,  DEFAULT_SAMPLER_PHASE, VIDEO_PC,                  GROUP_NONE,     MODE_PT ],
        [ "1280x1024",  1280, 1024,  1688, 0, 1066,  248, 38,  112, 3,  DEFAULT_SAMPLER_PHASE, VIDEO_PC,                  GROUP_NONE,     MODE_PT ],
        /* PS2 GSM 960i mode */
        [ "640x960i",    640,  480,   800, 0, 1050,   48, 33,   96, 2,  DEFAULT_SAMPLER_PHASE, (VIDEO_EDTV | VIDEO_PC),   GROUP_1080I,    (MODE_PT | MODE_L2 | MODE_INTERLACED) ],
        /* 1080i/p modes */
        [ "1080i",      1920,  540,  2200, 0, 1125,  148, 16,   44, 5,  DEFAULT_SAMPLER_PHASE, (VIDEO_HDTV | VIDEO_PC),   GROUP_1080I,    (MODE_PT | MODE_L2 | MODE_INTERLACED) ],
        [ "1080p",      1920, 1080,  2200, 0, 1125,  148, 36,   44, 5,  DEFAULT_SAMPLER_PHASE, (VIDEO_HDTV | VIDEO_PC),   GROUP_NONE,     MODE_PT ],
        /* VESA UXGA with 49 H.backporch cycles exchanged for H.synclen */
        [ "1600x1200",  1600, 1200,  2160, 0, 1250,  255, 46,  241, 3,  DEFAULT_SAMPLER_PHASE, VIDEO_PC,                  GROUP_NONE,     MODE_PT ],
    ]

    const video_mode_item_names = [
        'name',
        'h_active',
        'v_active',
        'h_total',
        'h_total_adj',
        'v_total',
        'h_backporch',
        'v_backporch',
        'h_synclen',
        'v_synclen',
        'sampler_phase',
        'type',
        'group',
        'flags',
    ];
    
    function getVideoModeItemProperties(item_name) {
        var min = 0, max = 0, display_name = '';
        var display_func = '';
        
        // Only includes changeable items
        switch(item_name) {
             case 'h_active':
                min = H_ACTIVE_MIN;
                max = H_ACTIVE_MAX;
                display_name = 'H.active';
                break;
             case 'v_active':
                min = V_ACTIVE_MIN;
                max = V_ACTIVE_MAX;
                display_name = 'V.active';
                break;
             case 'h_total':
                min = H_TOTAL_MIN;
                max = H_TOTAL_MAX;
                display_name = 'H.samplerate';                    
                break;
             case 'h_total_adj':
                min = 0;
                max = H_TOTAL_ADJ_MAX;
                display_name = 'H. s.rate adj';                    
                break;
             case 'h_backporch':
                min = H_BPORCH_MIN;
                max = H_BPORCH_MAX;
                display_name = 'H.backporch';
                break;
             case 'v_backporch':
                min = V_BPORCH_MIN;
                max = V_BPORCH_MAX;
                display_name = 'V.backporch';
                break;
             case 'h_synclen':
                min = H_SYNCLEN_MIN;
                max = H_SYNCLEN_MAX;
                display_name = 'H.synclen';
                break;
             case 'v_synclen':
                min = V_SYNCLEN_MIN;
                max = V_SYNCLEN_MAX;
                display_name = 'V.synclen';
                break;
             case 'sampler_phase':
                min = 0;
                max = SAMPLER_PHASE_MAX;
                display_name = 'Sampling phase';
                display_func = 'sampler_phase_disp';
                break;
             default:
                // Return empty
                return;
        }
        
        return {
            min: min,
            max: max,
            display_name: display_name,
            display_func: display_func,
        }
    }

    // Export items
    this.FW_VER_MAJOR     = FW_VER_MAJOR;
    this.FW_VER_MINOR     = FW_VER_MINOR;
    
    this.PROFILE_VER_MAJOR = FW_VER_MAJOR;
    this.PROFILE_VER_MINOR = FW_VER_MINOR;
    
    this.USERDATA_KEY     = USERDATA_KEY;
    this.USERDATA_DIS_KEY = USERDATA_DIS_KEY;
    
    this.UDE_INITCFG      = UDE_INITCFG;
    this.UDE_PROFILE      = UDE_PROFILE;
    
    this.MAX_PROFILE      = MAX_PROFILE;
    this.TVP_INTCLK_HZ    = TVP_INTCLK_HZ;

    this.AUDIO_GAIN_0DB   = AUDIO_GAIN_0DB;

    this.SECTORSIZE       = SECTORSIZE;

    this.settings         = settings;
    this.video_modes_def  = video_modes_def
    this.video_mode_item_names = video_mode_item_names;
    
    this.Ude_hdr = Ude_hdr;
    this.Ude_profile = Ude_profile;
    this.Avconfig_t = Avconfig_t;
    this.Mode_data_t = Mode_data_t;
    this.Mode_data_t_array = Mode_data_t_array;
    
    this.getNewUdeProfile = function (avc, vm, name, enabled) { 
            var profile = new Ude_profile();
            profile.setData(FW_VER_MAJOR, FW_VER_MINOR, UDE_PROFILE, avc, vm, name, enabled);
            return profile;
    }
    
    this.getVideoModeItemProperties = getVideoModeItemProperties;
            
 }            