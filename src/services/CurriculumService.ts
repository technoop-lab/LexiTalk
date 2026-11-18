import {
  CEFRLevel,
  CourseUnit,
  LessonNode,
  DetailedLessonData,
  SkillTag,
  GrammarCategoryTag,
  LexicalCategoryTag,
  Exercise,
  AssessmentScope,
  CEFRAssessmentDefinition,
  TargetLanguageCode,
} from '../types';
import { normalizeExercises } from '../utils/exerciseUtils';
import { CURIOSITY_UNITS } from '../data/curiosityCurriculum';
import { LESSON_A1_1_1_DATA } from '../data/lessons/lesson_a1_1_1';
import { LESSON_A1_1_2_DATA } from '../data/lessons/lesson_a1_1_2';
import { LESSON_A1_1_3_DATA } from '../data/lessons/lesson_a1_1_3';
import { LESSON_A1_1_4_DATA } from '../data/lessons/lesson_a1_1_4';
import { LESSON_A1_1_5_DATA } from '../data/lessons/lesson_a1_1_5';
import { LESSON_A1_1_6_DATA } from '../data/lessons/lesson_a1_1_6';
import { LESSON_A1_1_7_DATA } from '../data/lessons/lesson_a1_1_7';
import { LESSON_A1_1_8_DATA } from '../data/lessons/lesson_a1_1_8';
import { LESSON_A1_1_9_DATA } from '../data/lessons/lesson_a1_1_9';
import { LESSON_A1_1_10_DATA } from '../data/lessons/lesson_a1_1_10';
import { LESSON_A1_1_11_DATA } from '../data/lessons/lesson_a1_1_11';
import { LESSON_A1_1_12_DATA } from '../data/lessons/lesson_a1_1_12';
import { LESSON_A1_1_13_DATA } from '../data/lessons/lesson_a1_1_13';
import { LESSON_A1_1_14_DATA } from '../data/lessons/lesson_a1_1_14';
import { LESSON_A1_1_15_DATA } from '../data/lessons/lesson_a1_1_15';
import { LESSON_A1_2_16_DATA } from '../data/lessons/lesson_a1_2_16';
import { LESSON_A1_2_17_DATA } from '../data/lessons/lesson_a1_2_17';
import { LESSON_A1_2_18_DATA } from '../data/lessons/lesson_a1_2_18';
import { LESSON_A1_2_19_DATA } from '../data/lessons/lesson_a1_2_19';
import { LESSON_A1_2_20_DATA } from '../data/lessons/lesson_a1_2_20';
import { LESSON_A1_2_21_DATA } from '../data/lessons/lesson_a1_2_21';
import { LESSON_A1_2_22_DATA } from '../data/lessons/lesson_a1_2_22';
import { LESSON_A1_2_23_DATA } from '../data/lessons/lesson_a1_2_23';
import { LESSON_A1_2_24_DATA } from '../data/lessons/lesson_a1_2_24';
import { LESSON_A1_2_25_DATA } from '../data/lessons/lesson_a1_2_25';
import { LESSON_A1_2_26_DATA } from '../data/lessons/lesson_a1_2_26';
import { LESSON_A1_2_27_DATA } from '../data/lessons/lesson_a1_2_27';
import { LESSON_A1_2_28_DATA } from '../data/lessons/lesson_a1_2_28';
import { LESSON_A1_2_29_DATA } from '../data/lessons/lesson_a1_2_29';
import { LESSON_A1_2_30_DATA } from '../data/lessons/lesson_a1_2_30';
import { LESSON_A1_3_31_DATA } from '../data/lessons/lesson_a1_3_31';
import { LESSON_A1_3_32_DATA } from '../data/lessons/lesson_a1_3_32';
import { LESSON_A1_3_33_DATA } from '../data/lessons/lesson_a1_3_33';
import { LESSON_A1_3_34_DATA } from '../data/lessons/lesson_a1_3_34';
import { LESSON_A1_3_35_DATA } from '../data/lessons/lesson_a1_3_35';
import { LESSON_A1_3_36_DATA } from '../data/lessons/lesson_a1_3_36';
import { LESSON_A1_3_37_DATA } from '../data/lessons/lesson_a1_3_37';
import { LESSON_A1_3_38_DATA } from '../data/lessons/lesson_a1_3_38';
import { LESSON_A1_3_39_DATA } from '../data/lessons/lesson_a1_3_39';
import { LESSON_A1_3_40_DATA } from '../data/lessons/lesson_a1_3_40';
import { LESSON_A1_3_41_DATA } from '../data/lessons/lesson_a1_3_41';
import { LESSON_A1_3_42_DATA } from '../data/lessons/lesson_a1_3_42';
import { LESSON_A1_3_43_DATA } from '../data/lessons/lesson_a1_3_43';
import { LESSON_A1_3_44_DATA } from '../data/lessons/lesson_a1_3_44';
import { LESSON_A1_3_45_DATA } from '../data/lessons/lesson_a1_3_45';
import { LESSON_A1_4_46_DATA } from '../data/lessons/lesson_a1_4_46';
import { LESSON_A1_4_47_DATA } from '../data/lessons/lesson_a1_4_47';
import { LESSON_A1_4_48_DATA } from '../data/lessons/lesson_a1_4_48';
import { LESSON_A1_4_49_DATA } from '../data/lessons/lesson_a1_4_49';
import { LESSON_A1_4_50_DATA } from '../data/lessons/lesson_a1_4_50';
import { LESSON_A1_4_51_DATA } from '../data/lessons/lesson_a1_4_51';
import { LESSON_A1_4_52_DATA } from '../data/lessons/lesson_a1_4_52';
import { LESSON_A1_4_53_DATA } from '../data/lessons/lesson_a1_4_53';
import { LESSON_A1_4_54_DATA } from '../data/lessons/lesson_a1_4_54';
import { LESSON_A1_4_55_DATA } from '../data/lessons/lesson_a1_4_55';
import { LESSON_A1_4_56_DATA } from '../data/lessons/lesson_a1_4_56';
import { LESSON_A1_4_57_DATA } from '../data/lessons/lesson_a1_4_57';
import { LESSON_A1_4_58_DATA } from '../data/lessons/lesson_a1_4_58';
import { LESSON_A1_4_59_DATA } from '../data/lessons/lesson_a1_4_59';
import { LESSON_A1_4_60_DATA } from '../data/lessons/lesson_a1_4_60';
import { LESSON_A1_5_61_DATA } from '../data/lessons/lesson_a1_5_61';
import { LESSON_A1_5_62_DATA } from '../data/lessons/lesson_a1_5_62';
import { LESSON_A1_5_63_DATA } from '../data/lessons/lesson_a1_5_63';
import { LESSON_A1_5_64_DATA } from '../data/lessons/lesson_a1_5_64';
import { LESSON_A1_5_65_DATA } from '../data/lessons/lesson_a1_5_65';
import { LESSON_A1_5_66_DATA } from '../data/lessons/lesson_a1_5_66';
import { LESSON_A1_5_67_DATA } from '../data/lessons/lesson_a1_5_67';
import { LESSON_A1_5_68_DATA } from '../data/lessons/lesson_a1_5_68';
import { LESSON_A1_5_69_DATA } from '../data/lessons/lesson_a1_5_69';
import { LESSON_A1_5_70_DATA } from '../data/lessons/lesson_a1_5_70';
import { LESSON_A1_5_71_DATA } from '../data/lessons/lesson_a1_5_71';
import { LESSON_A1_5_72_DATA } from '../data/lessons/lesson_a1_5_72';
import { LESSON_A1_5_73_DATA } from '../data/lessons/lesson_a1_5_73';
import { LESSON_A1_5_74_DATA } from '../data/lessons/lesson_a1_5_74';
import { LESSON_A1_5_75_DATA } from '../data/lessons/lesson_a1_5_75';
import { LESSON_A1_6_76_DATA } from '../data/lessons/lesson_a1_6_76';
import { LESSON_A1_6_77_DATA } from '../data/lessons/lesson_a1_6_77';
import { LESSON_A1_6_78_DATA } from '../data/lessons/lesson_a1_6_78';
import { LESSON_A1_6_79_DATA } from '../data/lessons/lesson_a1_6_79';
import { LESSON_A1_6_80_DATA } from '../data/lessons/lesson_a1_6_80';
import { LESSON_A1_6_81_DATA } from '../data/lessons/lesson_a1_6_81';
import { LESSON_A1_6_82_DATA } from '../data/lessons/lesson_a1_6_82';
import { LESSON_A1_6_83_DATA } from '../data/lessons/lesson_a1_6_83';
import { LESSON_A1_6_84_DATA } from '../data/lessons/lesson_a1_6_84';
import { LESSON_A1_6_85_DATA } from '../data/lessons/lesson_a1_6_85';
import { LESSON_A1_6_86_DATA } from '../data/lessons/lesson_a1_6_86';
import { LESSON_A1_6_87_DATA } from '../data/lessons/lesson_a1_6_87';
import { LESSON_A1_6_88_DATA } from '../data/lessons/lesson_a1_6_88';
import { LESSON_A1_6_89_DATA } from '../data/lessons/lesson_a1_6_89';
import { LESSON_A1_6_90_DATA } from '../data/lessons/lesson_a1_6_90';
import { LESSON_A2_7_91_DATA } from '../data/lessons/lesson_a2_7_91';
import { LESSON_A2_7_92_DATA } from '../data/lessons/lesson_a2_7_92';
import { LESSON_A2_7_93_DATA } from '../data/lessons/lesson_a2_7_93';
import { LESSON_A2_7_94_DATA } from '../data/lessons/lesson_a2_7_94';
import { LESSON_A2_7_95_DATA } from '../data/lessons/lesson_a2_7_95';
import { LESSON_A2_7_96_DATA } from '../data/lessons/lesson_a2_7_96';
import { LESSON_A2_7_97_DATA } from '../data/lessons/lesson_a2_7_97';
import { LESSON_A2_7_98_DATA } from '../data/lessons/lesson_a2_7_98';
import { LESSON_A2_7_99_DATA } from '../data/lessons/lesson_a2_7_99';
import { LESSON_A2_7_100_DATA } from '../data/lessons/lesson_a2_7_100';
import { LESSON_A2_7_101_DATA } from '../data/lessons/lesson_a2_7_101';
import { LESSON_A2_7_102_DATA } from '../data/lessons/lesson_a2_7_102';
import { LESSON_A2_7_103_DATA } from '../data/lessons/lesson_a2_7_103';
import { LESSON_A2_7_104_DATA } from '../data/lessons/lesson_a2_7_104';
import { LESSON_A2_7_105_DATA } from '../data/lessons/lesson_a2_7_105';
import { LESSON_A2_8_106_DATA } from '../data/lessons/lesson_a2_8_106';
import { LESSON_A2_8_107_DATA } from '../data/lessons/lesson_a2_8_107';
import { LESSON_A2_8_108_DATA } from '../data/lessons/lesson_a2_8_108';
import { LESSON_A2_8_109_DATA } from '../data/lessons/lesson_a2_8_109';
import { LESSON_A2_8_110_DATA } from '../data/lessons/lesson_a2_8_110';
import { LESSON_A2_8_111_DATA } from '../data/lessons/lesson_a2_8_111';
import { LESSON_A2_8_112_DATA } from '../data/lessons/lesson_a2_8_112';
import { LESSON_A2_8_113_DATA } from '../data/lessons/lesson_a2_8_113';
import { LESSON_A2_8_114_DATA } from '../data/lessons/lesson_a2_8_114';
import { LESSON_A2_8_115_DATA } from '../data/lessons/lesson_a2_8_115';
import { LESSON_A2_8_116_DATA } from '../data/lessons/lesson_a2_8_116';
import { LESSON_A2_8_117_DATA } from '../data/lessons/lesson_a2_8_117';
import { LESSON_A2_8_118_DATA } from '../data/lessons/lesson_a2_8_118';
import { LESSON_A2_8_119_DATA } from '../data/lessons/lesson_a2_8_119';
import { LESSON_A2_8_120_DATA } from '../data/lessons/lesson_a2_8_120';
import { LESSON_A2_9_121_DATA } from '../data/lessons/lesson_a2_9_121';
import { LESSON_A2_9_122_DATA } from '../data/lessons/lesson_a2_9_122';
import { LESSON_A2_9_123_DATA } from '../data/lessons/lesson_a2_9_123';
import { LESSON_A2_9_124_DATA } from '../data/lessons/lesson_a2_9_124';
import { LESSON_A2_9_125_DATA } from '../data/lessons/lesson_a2_9_125';
import { LESSON_A2_9_126_DATA } from '../data/lessons/lesson_a2_9_126';
import { LESSON_A2_9_127_DATA } from '../data/lessons/lesson_a2_9_127';
import { LESSON_A2_9_128_DATA } from '../data/lessons/lesson_a2_9_128';
import { LESSON_A2_9_129_DATA } from '../data/lessons/lesson_a2_9_129';
import { LESSON_A2_9_130_DATA } from '../data/lessons/lesson_a2_9_130';
import { LESSON_A2_9_131_DATA } from '../data/lessons/lesson_a2_9_131';
import { LESSON_A2_9_132_DATA } from '../data/lessons/lesson_a2_9_132';
import { LESSON_A2_9_133_DATA } from '../data/lessons/lesson_a2_9_133';
import { LESSON_A2_9_134_DATA } from '../data/lessons/lesson_a2_9_134';
import { LESSON_A2_9_135_DATA } from '../data/lessons/lesson_a2_9_135';
import { LESSON_A2_10_136_DATA } from '../data/lessons/lesson_a2_10_136';
import { LESSON_A2_10_137_DATA } from '../data/lessons/lesson_a2_10_137';
import { LESSON_A2_10_138_DATA } from '../data/lessons/lesson_a2_10_138';
import { LESSON_A2_10_139_DATA } from '../data/lessons/lesson_a2_10_139';
import { LESSON_A2_10_140_DATA } from '../data/lessons/lesson_a2_10_140';
import { LESSON_A2_10_141_DATA } from '../data/lessons/lesson_a2_10_141';
import { LESSON_A2_10_142_DATA } from '../data/lessons/lesson_a2_10_142';
import { LESSON_A2_10_143_DATA } from '../data/lessons/lesson_a2_10_143';
import { LESSON_A2_10_144_DATA } from '../data/lessons/lesson_a2_10_144';
import { LESSON_A2_10_145_DATA } from '../data/lessons/lesson_a2_10_145';
import { LESSON_A2_10_146_DATA } from '../data/lessons/lesson_a2_10_146';
import { LESSON_A2_10_147_DATA } from '../data/lessons/lesson_a2_10_147';
import { LESSON_A2_10_148_DATA } from '../data/lessons/lesson_a2_10_148';
import { LESSON_A2_10_149_DATA } from '../data/lessons/lesson_a2_10_149';
import { LESSON_A2_10_150_DATA } from '../data/lessons/lesson_a2_10_150';
import { LESSON_A2_11_151_DATA } from '../data/lessons/lesson_a2_11_151';
import { LESSON_A2_11_152_DATA } from '../data/lessons/lesson_a2_11_152';
import { LESSON_A2_11_153_DATA } from '../data/lessons/lesson_a2_11_153';
import { LESSON_A2_11_154_DATA } from '../data/lessons/lesson_a2_11_154';
import { LESSON_A2_11_155_DATA } from '../data/lessons/lesson_a2_11_155';
import { LESSON_A2_11_156_DATA } from '../data/lessons/lesson_a2_11_156';
import { LESSON_A2_11_157_DATA } from '../data/lessons/lesson_a2_11_157';
import { LESSON_A2_11_158_DATA } from '../data/lessons/lesson_a2_11_158';
import { LESSON_A2_11_159_DATA } from '../data/lessons/lesson_a2_11_159';
import { LESSON_A2_11_160_DATA } from '../data/lessons/lesson_a2_11_160';
import { LESSON_A2_11_161_DATA } from '../data/lessons/lesson_a2_11_161';
import { LESSON_A2_11_162_DATA } from '../data/lessons/lesson_a2_11_162';
import { LESSON_A2_11_163_DATA } from '../data/lessons/lesson_a2_11_163';
import { LESSON_A2_11_164_DATA } from '../data/lessons/lesson_a2_11_164';
import { LESSON_A2_11_165_DATA } from '../data/lessons/lesson_a2_11_165';
import { LESSON_A2_12_166_DATA } from '../data/lessons/lesson_a2_12_166';
import { LESSON_A2_12_167_DATA } from '../data/lessons/lesson_a2_12_167';
import { LESSON_A2_12_168_DATA } from '../data/lessons/lesson_a2_12_168';
import { LESSON_A2_12_169_DATA } from '../data/lessons/lesson_a2_12_169';
import { LESSON_A2_12_170_DATA } from '../data/lessons/lesson_a2_12_170';
import { LESSON_A2_12_171_DATA } from '../data/lessons/lesson_a2_12_171';
import { LESSON_A2_12_172_DATA } from '../data/lessons/lesson_a2_12_172';
import { LESSON_A2_12_173_DATA } from '../data/lessons/lesson_a2_12_173';
import { LESSON_A2_12_174_DATA } from '../data/lessons/lesson_a2_12_174';
import { LESSON_A2_12_175_DATA } from '../data/lessons/lesson_a2_12_175';
import { LESSON_A2_12_176_DATA } from '../data/lessons/lesson_a2_12_176';
import { LESSON_A2_12_177_DATA } from '../data/lessons/lesson_a2_12_177';
import { LESSON_A2_12_178_DATA } from '../data/lessons/lesson_a2_12_178';
import { LESSON_A2_12_179_DATA } from '../data/lessons/lesson_a2_12_179';
import { LESSON_A2_12_180_DATA } from '../data/lessons/lesson_a2_12_180';
import { LESSON_A2_13_181_DATA } from '../data/lessons/lesson_a2_13_181';
import { LESSON_A2_13_182_DATA } from '../data/lessons/lesson_a2_13_182';
import { LESSON_A2_13_183_DATA } from '../data/lessons/lesson_a2_13_183';
import { LESSON_A2_13_184_DATA } from '../data/lessons/lesson_a2_13_184';
import { LESSON_A2_13_185_DATA } from '../data/lessons/lesson_a2_13_185';
import { LESSON_A2_13_186_DATA } from '../data/lessons/lesson_a2_13_186';
import { LESSON_A2_13_187_DATA } from '../data/lessons/lesson_a2_13_187';
import { LESSON_A2_13_188_DATA } from '../data/lessons/lesson_a2_13_188';
import { LESSON_A2_13_189_DATA } from '../data/lessons/lesson_a2_13_189';
import { LESSON_A2_13_190_DATA } from '../data/lessons/lesson_a2_13_190';
import { LESSON_A2_13_191_DATA } from '../data/lessons/lesson_a2_13_191';
import { LESSON_A2_13_192_DATA } from '../data/lessons/lesson_a2_13_192';
import { LESSON_A2_13_193_DATA } from '../data/lessons/lesson_a2_13_193';
import { LESSON_A2_13_194_DATA } from '../data/lessons/lesson_a2_13_194';
import { LESSON_A2_13_195_DATA } from '../data/lessons/lesson_a2_13_195';
import { LESSON_A2_14_196_DATA } from '../data/lessons/lesson_a2_14_196';
import { LESSON_A2_14_197_DATA } from '../data/lessons/lesson_a2_14_197';
import { LESSON_A2_14_198_DATA } from '../data/lessons/lesson_a2_14_198';
import { LESSON_A2_14_199_DATA } from '../data/lessons/lesson_a2_14_199';
import { LESSON_A2_14_200_DATA } from '../data/lessons/lesson_a2_14_200';
import { LESSON_A2_14_201_DATA } from '../data/lessons/lesson_a2_14_201';
import { LESSON_A2_14_202_DATA } from '../data/lessons/lesson_a2_14_202';
import { LESSON_A2_14_203_DATA } from '../data/lessons/lesson_a2_14_203';
import { LESSON_A2_14_204_DATA } from '../data/lessons/lesson_a2_14_204';
import { LESSON_A2_14_205_DATA } from '../data/lessons/lesson_a2_14_205';
import { LESSON_A2_14_206_DATA } from '../data/lessons/lesson_a2_14_206';
import { LESSON_A2_14_207_DATA } from '../data/lessons/lesson_a2_14_207';
import { LESSON_A2_14_208_DATA } from '../data/lessons/lesson_a2_14_208';
import { LESSON_A2_14_209_DATA } from '../data/lessons/lesson_a2_14_209';
import { LESSON_A2_14_210_DATA } from '../data/lessons/lesson_a2_14_210';
import { LESSON_A2_15_211_DATA } from '../data/lessons/lesson_a2_15_211';
import { LESSON_A2_15_212_DATA } from '../data/lessons/lesson_a2_15_212';
import { LESSON_A2_15_213_DATA } from '../data/lessons/lesson_a2_15_213';
import { LESSON_A2_15_214_DATA } from '../data/lessons/lesson_a2_15_214';
import { LESSON_A2_15_215_DATA } from '../data/lessons/lesson_a2_15_215';
import { LESSON_A2_15_216_DATA } from '../data/lessons/lesson_a2_15_216';
import { LESSON_A2_15_217_DATA } from '../data/lessons/lesson_a2_15_217';
import { LESSON_A2_15_218_DATA } from '../data/lessons/lesson_a2_15_218';
import { LESSON_A2_15_219_DATA } from '../data/lessons/lesson_a2_15_219';
import { LESSON_A2_15_220_DATA } from '../data/lessons/lesson_a2_15_220';
import { LESSON_A2_15_221_DATA } from '../data/lessons/lesson_a2_15_221';
import { LESSON_A2_15_222_DATA } from '../data/lessons/lesson_a2_15_222';
import { LESSON_A2_15_223_DATA } from '../data/lessons/lesson_a2_15_223';
import { LESSON_A2_15_224_DATA } from '../data/lessons/lesson_a2_15_224';
import { LESSON_A2_15_225_DATA } from '../data/lessons/lesson_a2_15_225';
import { LESSON_A2_16_226_DATA } from '../data/lessons/lesson_a2_16_226';
import { LESSON_A2_16_227_DATA } from '../data/lessons/lesson_a2_16_227';
import { LESSON_A2_16_228_DATA } from '../data/lessons/lesson_a2_16_228';
import { LESSON_A2_16_229_DATA } from '../data/lessons/lesson_a2_16_229';
import { LESSON_A2_16_230_DATA } from '../data/lessons/lesson_a2_16_230';
import { LESSON_A2_16_231_DATA } from '../data/lessons/lesson_a2_16_231';
import { LESSON_A2_16_232_DATA } from '../data/lessons/lesson_a2_16_232';
import { LESSON_A2_16_233_DATA } from '../data/lessons/lesson_a2_16_233';
import { LESSON_A2_16_234_DATA } from '../data/lessons/lesson_a2_16_234';
import { LESSON_A2_16_235_DATA } from '../data/lessons/lesson_a2_16_235';
import { LESSON_A2_16_236_DATA } from '../data/lessons/lesson_a2_16_236';
import { LESSON_A2_16_237_DATA } from '../data/lessons/lesson_a2_16_237';
import { LESSON_A2_16_238_DATA } from '../data/lessons/lesson_a2_16_238';
import { LESSON_A2_16_239_DATA } from '../data/lessons/lesson_a2_16_239';
import { LESSON_A2_16_240_DATA } from '../data/lessons/lesson_a2_16_240';
import { LESSON_A2_17_241_DATA } from '../data/lessons/lesson_a2_17_241';
import { LESSON_A2_17_242_DATA } from '../data/lessons/lesson_a2_17_242';
import { LESSON_A2_17_243_DATA } from '../data/lessons/lesson_a2_17_243';
import { LESSON_A2_17_244_DATA } from '../data/lessons/lesson_a2_17_244';
import { LESSON_A2_17_245_DATA } from '../data/lessons/lesson_a2_17_245';
import { LESSON_A2_17_246_DATA } from '../data/lessons/lesson_a2_17_246';
import { LESSON_A2_17_247_DATA } from '../data/lessons/lesson_a2_17_247';
import { LESSON_A2_17_248_DATA } from '../data/lessons/lesson_a2_17_248';
import { LESSON_A2_17_249_DATA } from '../data/lessons/lesson_a2_17_249';
import { LESSON_A2_17_250_DATA } from '../data/lessons/lesson_a2_17_250';
import { LESSON_A2_17_251_DATA } from '../data/lessons/lesson_a2_17_251';
import { LESSON_A2_17_252_DATA } from '../data/lessons/lesson_a2_17_252';
import { LESSON_A2_17_253_DATA } from '../data/lessons/lesson_a2_17_253';
import { LESSON_A2_17_254_DATA } from '../data/lessons/lesson_a2_17_254';
import { LESSON_A2_17_255_DATA } from '../data/lessons/lesson_a2_17_255';
import { LESSON_A2_18_256_DATA } from '../data/lessons/lesson_a2_18_256';
import { LESSON_A2_18_257_DATA } from '../data/lessons/lesson_a2_18_257';
import { LESSON_A2_18_258_DATA } from '../data/lessons/lesson_a2_18_258';
import { LESSON_A2_18_259_DATA } from '../data/lessons/lesson_a2_18_259';
import { LESSON_A2_18_260_DATA } from '../data/lessons/lesson_a2_18_260';
import { LESSON_A2_18_261_DATA } from '../data/lessons/lesson_a2_18_261';
import { LESSON_A2_18_262_DATA } from '../data/lessons/lesson_a2_18_262';
import { LESSON_A2_18_263_DATA } from '../data/lessons/lesson_a2_18_263';
import { LESSON_A2_18_264_DATA } from '../data/lessons/lesson_a2_18_264';
import { LESSON_A2_18_265_DATA } from '../data/lessons/lesson_a2_18_265';
import { LESSON_A2_18_266_DATA } from '../data/lessons/lesson_a2_18_266';
import { LESSON_A2_18_267_DATA } from '../data/lessons/lesson_a2_18_267';
import { LESSON_A2_18_268_DATA } from '../data/lessons/lesson_a2_18_268';
import { LESSON_A2_18_269_DATA } from '../data/lessons/lesson_a2_18_269';
import { LESSON_A2_18_270_DATA } from '../data/lessons/lesson_a2_18_270';

export interface LessonInspectorMetrics {
  lessonId: string;
  title: string;
  cefr: CEFRLevel | string;
  unitTitle: string;
  sectionsCount: number;
  vocabularyCount: number;
  languageChunksCount: number;
  grammarTargetsCount: number;
  exercisesCount: number;
  reviewItemsCount: number;
  assessmentItemsCount: number;
  dialoguesCount: number;
  speakingActivitiesCount: number;
  listeningActivitiesCount: number;
  totalInteractiveItemsCount: number;
  canDoStatementsCount: number;
}

export interface LessonStageDefinition {
  stageNumber: string;
  id: string;
  title: string;
  category: 'Objective' | 'Vocabulary' | 'Grammar' | 'Practice' | 'Interaction' | 'Evaluation';
  itemCount: number;
  description: string;
  icon: string;
  skillTags: SkillTag[];
}

export const ALL_CEFR_LEVELS: { level: CEFRLevel; title: string; description: string; unitCount: number }[] = [
  { level: 'A1', title: 'A1 Beginner', description: 'Breakthrough & Essential Communication', unitCount: 6 },
  { level: 'A2', title: 'A2 Elementary', description: 'Waystage & Everyday Social Situations', unitCount: 12 },
  { level: 'B1', title: 'B1 Intermediate', description: 'English Path units in development (60-day course B1 content is available)', unitCount: 0 },
  { level: 'B2', title: 'B2 Upper Intermediate', description: 'In development — units not yet authored', unitCount: 0 },
  { level: 'C1', title: 'C1 Advanced', description: 'In development — units not yet authored', unitCount: 0 },
  { level: 'C2', title: 'C2 Mastery', description: 'In development — units not yet authored', unitCount: 0 },
];

class CurriculumServiceManager {
  private detailedLessons: Record<string, DetailedLessonData> = {
    lesson_a1_1_1: LESSON_A1_1_1_DATA,
    lesson_a1_1_2: LESSON_A1_1_2_DATA,
    lesson_a1_1_3: LESSON_A1_1_3_DATA,
    lesson_a1_1_4: LESSON_A1_1_4_DATA,
    lesson_a1_1_5: LESSON_A1_1_5_DATA,
    lesson_a1_1_6: LESSON_A1_1_6_DATA,
    lesson_a1_1_7: LESSON_A1_1_7_DATA,
    lesson_a1_1_8: LESSON_A1_1_8_DATA,
    lesson_a1_1_9: LESSON_A1_1_9_DATA,
    lesson_a1_1_10: LESSON_A1_1_10_DATA,
    lesson_a1_1_11: LESSON_A1_1_11_DATA,
    lesson_a1_1_12: LESSON_A1_1_12_DATA,
    lesson_a1_1_13: LESSON_A1_1_13_DATA,
    lesson_a1_1_14: LESSON_A1_1_14_DATA,
    lesson_a1_1_15: LESSON_A1_1_15_DATA,
    lesson_a1_2_16: LESSON_A1_2_16_DATA,
    lesson_a1_2_17: LESSON_A1_2_17_DATA,
    lesson_a1_2_18: LESSON_A1_2_18_DATA,
    lesson_a1_2_19: LESSON_A1_2_19_DATA,
    lesson_a1_2_20: LESSON_A1_2_20_DATA,
    lesson_a1_2_21: LESSON_A1_2_21_DATA,
    lesson_a1_2_22: LESSON_A1_2_22_DATA,
    lesson_a1_2_23: LESSON_A1_2_23_DATA,
    lesson_a1_2_24: LESSON_A1_2_24_DATA,
    lesson_a1_2_25: LESSON_A1_2_25_DATA,
    lesson_a1_2_26: LESSON_A1_2_26_DATA,
    lesson_a1_2_27: LESSON_A1_2_27_DATA,
    lesson_a1_2_28: LESSON_A1_2_28_DATA,
    lesson_a1_2_29: LESSON_A1_2_29_DATA,
    lesson_a1_2_30: LESSON_A1_2_30_DATA,
    lesson_a1_3_31: LESSON_A1_3_31_DATA,
    lesson_a1_3_32: LESSON_A1_3_32_DATA,
    lesson_a1_3_33: LESSON_A1_3_33_DATA,
    lesson_a1_3_34: LESSON_A1_3_34_DATA,
    lesson_a1_3_35: LESSON_A1_3_35_DATA,
    lesson_a1_3_36: LESSON_A1_3_36_DATA,
    lesson_a1_3_37: LESSON_A1_3_37_DATA,
    lesson_a1_3_38: LESSON_A1_3_38_DATA,
    lesson_a1_3_39: LESSON_A1_3_39_DATA,
    lesson_a1_3_40: LESSON_A1_3_40_DATA,
    lesson_a1_3_41: LESSON_A1_3_41_DATA,
    lesson_a1_3_42: LESSON_A1_3_42_DATA,
    lesson_a1_3_43: LESSON_A1_3_43_DATA,
    lesson_a1_3_44: LESSON_A1_3_44_DATA,
    lesson_a1_3_45: LESSON_A1_3_45_DATA,
    lesson_a1_4_46: LESSON_A1_4_46_DATA,
    lesson_a1_4_47: LESSON_A1_4_47_DATA,
    lesson_a1_4_48: LESSON_A1_4_48_DATA,
    lesson_a1_4_49: LESSON_A1_4_49_DATA,
    lesson_a1_4_50: LESSON_A1_4_50_DATA,
    lesson_a1_4_51: LESSON_A1_4_51_DATA,
    lesson_a1_4_52: LESSON_A1_4_52_DATA,
    lesson_a1_4_53: LESSON_A1_4_53_DATA,
    lesson_a1_4_54: LESSON_A1_4_54_DATA,
    lesson_a1_4_55: LESSON_A1_4_55_DATA,
    lesson_a1_4_56: LESSON_A1_4_56_DATA,
    lesson_a1_4_57: LESSON_A1_4_57_DATA,
    lesson_a1_4_58: LESSON_A1_4_58_DATA,
    lesson_a1_4_59: LESSON_A1_4_59_DATA,
    lesson_a1_4_60: LESSON_A1_4_60_DATA,
    lesson_a1_5_61: LESSON_A1_5_61_DATA,
    lesson_a1_5_62: LESSON_A1_5_62_DATA,
    lesson_a1_5_63: LESSON_A1_5_63_DATA,
    lesson_a1_5_64: LESSON_A1_5_64_DATA,
    lesson_a1_5_65: LESSON_A1_5_65_DATA,
    lesson_a1_5_66: LESSON_A1_5_66_DATA,
    lesson_a1_5_67: LESSON_A1_5_67_DATA,
    lesson_a1_5_68: LESSON_A1_5_68_DATA,
    lesson_a1_5_69: LESSON_A1_5_69_DATA,
    lesson_a1_5_70: LESSON_A1_5_70_DATA,
    lesson_a1_5_71: LESSON_A1_5_71_DATA,
    lesson_a1_5_72: LESSON_A1_5_72_DATA,
    lesson_a1_5_73: LESSON_A1_5_73_DATA,
    lesson_a1_5_74: LESSON_A1_5_74_DATA,
    lesson_a1_5_75: LESSON_A1_5_75_DATA,
    lesson_a1_6_76: LESSON_A1_6_76_DATA,
    lesson_a1_6_77: LESSON_A1_6_77_DATA,
    lesson_a1_6_78: LESSON_A1_6_78_DATA,
    lesson_a1_6_79: LESSON_A1_6_79_DATA,
    lesson_a1_6_80: LESSON_A1_6_80_DATA,
    lesson_a1_6_81: LESSON_A1_6_81_DATA,
    lesson_a1_6_82: LESSON_A1_6_82_DATA,
    lesson_a1_6_83: LESSON_A1_6_83_DATA,
    lesson_a1_6_84: LESSON_A1_6_84_DATA,
    lesson_a1_6_85: LESSON_A1_6_85_DATA,
    lesson_a1_6_86: LESSON_A1_6_86_DATA,
    lesson_a1_6_87: LESSON_A1_6_87_DATA,
    lesson_a1_6_88: LESSON_A1_6_88_DATA,
    lesson_a1_6_89: LESSON_A1_6_89_DATA,
    lesson_a1_6_90: LESSON_A1_6_90_DATA,
    lesson_a2_7_91: LESSON_A2_7_91_DATA,
    lesson_a2_7_92: LESSON_A2_7_92_DATA,
    lesson_a2_7_93: LESSON_A2_7_93_DATA,
    lesson_a2_7_94: LESSON_A2_7_94_DATA,
    lesson_a2_7_95: LESSON_A2_7_95_DATA,
    lesson_a2_7_96: LESSON_A2_7_96_DATA,
    lesson_a2_7_97: LESSON_A2_7_97_DATA,
    lesson_a2_7_98: LESSON_A2_7_98_DATA,
    lesson_a2_7_99: LESSON_A2_7_99_DATA,
    lesson_a2_7_100: LESSON_A2_7_100_DATA,
    lesson_a2_7_101: LESSON_A2_7_101_DATA,
    lesson_a2_7_102: LESSON_A2_7_102_DATA,
    lesson_a2_7_103: LESSON_A2_7_103_DATA,
    lesson_a2_7_104: LESSON_A2_7_104_DATA,
    lesson_a2_7_105: LESSON_A2_7_105_DATA,
    lesson_a2_8_106: LESSON_A2_8_106_DATA,
    lesson_a2_8_107: LESSON_A2_8_107_DATA,
    lesson_a2_8_108: LESSON_A2_8_108_DATA,
    lesson_a2_8_109: LESSON_A2_8_109_DATA,
    lesson_a2_8_110: LESSON_A2_8_110_DATA,
    lesson_a2_8_111: LESSON_A2_8_111_DATA,
    lesson_a2_8_112: LESSON_A2_8_112_DATA,
    lesson_a2_8_113: LESSON_A2_8_113_DATA,
    lesson_a2_8_114: LESSON_A2_8_114_DATA,
    lesson_a2_8_115: LESSON_A2_8_115_DATA,
    lesson_a2_8_116: LESSON_A2_8_116_DATA,
    lesson_a2_8_117: LESSON_A2_8_117_DATA,
    lesson_a2_8_118: LESSON_A2_8_118_DATA,
    lesson_a2_8_119: LESSON_A2_8_119_DATA,
    lesson_a2_8_120: LESSON_A2_8_120_DATA,
    lesson_a2_9_121: LESSON_A2_9_121_DATA,
    lesson_a2_9_122: LESSON_A2_9_122_DATA,
    lesson_a2_9_123: LESSON_A2_9_123_DATA,
    lesson_a2_9_124: LESSON_A2_9_124_DATA,
    lesson_a2_9_125: LESSON_A2_9_125_DATA,
    lesson_a2_9_126: LESSON_A2_9_126_DATA,
    lesson_a2_9_127: LESSON_A2_9_127_DATA,
    lesson_a2_9_128: LESSON_A2_9_128_DATA,
    lesson_a2_9_129: LESSON_A2_9_129_DATA,
    lesson_a2_9_130: LESSON_A2_9_130_DATA,
    lesson_a2_9_131: LESSON_A2_9_131_DATA,
    lesson_a2_9_132: LESSON_A2_9_132_DATA,
    lesson_a2_9_133: LESSON_A2_9_133_DATA,
    lesson_a2_9_134: LESSON_A2_9_134_DATA,
    lesson_a2_9_135: LESSON_A2_9_135_DATA,
    lesson_a2_10_136: LESSON_A2_10_136_DATA,
    lesson_a2_10_137: LESSON_A2_10_137_DATA,
    lesson_a2_10_138: LESSON_A2_10_138_DATA,
    lesson_a2_10_139: LESSON_A2_10_139_DATA,
    lesson_a2_10_140: LESSON_A2_10_140_DATA,
    lesson_a2_10_141: LESSON_A2_10_141_DATA,
    lesson_a2_10_142: LESSON_A2_10_142_DATA,
    lesson_a2_10_143: LESSON_A2_10_143_DATA,
    lesson_a2_10_144: LESSON_A2_10_144_DATA,
    lesson_a2_10_145: LESSON_A2_10_145_DATA,
    lesson_a2_10_146: LESSON_A2_10_146_DATA,
    lesson_a2_10_147: LESSON_A2_10_147_DATA,
    lesson_a2_10_148: LESSON_A2_10_148_DATA,
    lesson_a2_10_149: LESSON_A2_10_149_DATA,
    lesson_a2_10_150: LESSON_A2_10_150_DATA,
    lesson_a2_11_151: LESSON_A2_11_151_DATA,
    lesson_a2_11_152: LESSON_A2_11_152_DATA,
    lesson_a2_11_153: LESSON_A2_11_153_DATA,
    lesson_a2_11_154: LESSON_A2_11_154_DATA,
    lesson_a2_11_155: LESSON_A2_11_155_DATA,
    lesson_a2_11_156: LESSON_A2_11_156_DATA,
    lesson_a2_11_157: LESSON_A2_11_157_DATA,
    lesson_a2_11_158: LESSON_A2_11_158_DATA,
    lesson_a2_11_159: LESSON_A2_11_159_DATA,
    lesson_a2_11_160: LESSON_A2_11_160_DATA,
    lesson_a2_11_161: LESSON_A2_11_161_DATA,
    lesson_a2_11_162: LESSON_A2_11_162_DATA,
    lesson_a2_11_163: LESSON_A2_11_163_DATA,
    lesson_a2_11_164: LESSON_A2_11_164_DATA,
    lesson_a2_11_165: LESSON_A2_11_165_DATA,
    lesson_a2_12_166: LESSON_A2_12_166_DATA,
    lesson_a2_12_167: LESSON_A2_12_167_DATA,
    lesson_a2_12_168: LESSON_A2_12_168_DATA,
    lesson_a2_12_169: LESSON_A2_12_169_DATA,
    lesson_a2_12_170: LESSON_A2_12_170_DATA,
    lesson_a2_12_171: LESSON_A2_12_171_DATA,
    lesson_a2_12_172: LESSON_A2_12_172_DATA,
    lesson_a2_12_173: LESSON_A2_12_173_DATA,
    lesson_a2_12_174: LESSON_A2_12_174_DATA,
    lesson_a2_12_175: LESSON_A2_12_175_DATA,
    lesson_a2_12_176: LESSON_A2_12_176_DATA,
    lesson_a2_12_177: LESSON_A2_12_177_DATA,
    lesson_a2_12_178: LESSON_A2_12_178_DATA,
    lesson_a2_12_179: LESSON_A2_12_179_DATA,
    lesson_a2_12_180: LESSON_A2_12_180_DATA,
    lesson_a2_13_181: LESSON_A2_13_181_DATA,
    lesson_a2_13_182: LESSON_A2_13_182_DATA,
    lesson_a2_13_183: LESSON_A2_13_183_DATA,
    lesson_a2_13_184: LESSON_A2_13_184_DATA,
    lesson_a2_13_185: LESSON_A2_13_185_DATA,
    lesson_a2_13_186: LESSON_A2_13_186_DATA,
    lesson_a2_13_187: LESSON_A2_13_187_DATA,
    lesson_a2_13_188: LESSON_A2_13_188_DATA,
    lesson_a2_13_189: LESSON_A2_13_189_DATA,
    lesson_a2_13_190: LESSON_A2_13_190_DATA,
    lesson_a2_13_191: LESSON_A2_13_191_DATA,
    lesson_a2_13_192: LESSON_A2_13_192_DATA,
    lesson_a2_13_193: LESSON_A2_13_193_DATA,
    lesson_a2_13_194: LESSON_A2_13_194_DATA,
    lesson_a2_13_195: LESSON_A2_13_195_DATA,
    lesson_a2_14_196: LESSON_A2_14_196_DATA,
    lesson_a2_14_197: LESSON_A2_14_197_DATA,
    lesson_a2_14_198: LESSON_A2_14_198_DATA,
    lesson_a2_14_199: LESSON_A2_14_199_DATA,
    lesson_a2_14_200: LESSON_A2_14_200_DATA,
    lesson_a2_14_201: LESSON_A2_14_201_DATA,
    lesson_a2_14_202: LESSON_A2_14_202_DATA,
    lesson_a2_14_203: LESSON_A2_14_203_DATA,
    lesson_a2_14_204: LESSON_A2_14_204_DATA,
    lesson_a2_14_205: LESSON_A2_14_205_DATA,
    lesson_a2_14_206: LESSON_A2_14_206_DATA,
    lesson_a2_14_207: LESSON_A2_14_207_DATA,
    lesson_a2_14_208: LESSON_A2_14_208_DATA,
    lesson_a2_14_209: LESSON_A2_14_209_DATA,
    lesson_a2_14_210: LESSON_A2_14_210_DATA,
    lesson_a2_15_211: LESSON_A2_15_211_DATA,
    lesson_a2_15_212: LESSON_A2_15_212_DATA,
    lesson_a2_15_213: LESSON_A2_15_213_DATA,
    lesson_a2_15_214: LESSON_A2_15_214_DATA,
    lesson_a2_15_215: LESSON_A2_15_215_DATA,
    lesson_a2_15_216: LESSON_A2_15_216_DATA,
    lesson_a2_15_217: LESSON_A2_15_217_DATA,
    lesson_a2_15_218: LESSON_A2_15_218_DATA,
    lesson_a2_15_219: LESSON_A2_15_219_DATA,
    lesson_a2_15_220: LESSON_A2_15_220_DATA,
    lesson_a2_15_221: LESSON_A2_15_221_DATA,
    lesson_a2_15_222: LESSON_A2_15_222_DATA,
    lesson_a2_15_223: LESSON_A2_15_223_DATA,
    lesson_a2_15_224: LESSON_A2_15_224_DATA,
    lesson_a2_15_225: LESSON_A2_15_225_DATA,
    lesson_a2_16_226: LESSON_A2_16_226_DATA,
    lesson_a2_16_227: LESSON_A2_16_227_DATA,
    lesson_a2_16_228: LESSON_A2_16_228_DATA,
    lesson_a2_16_229: LESSON_A2_16_229_DATA,
    lesson_a2_16_230: LESSON_A2_16_230_DATA,
    lesson_a2_16_231: LESSON_A2_16_231_DATA,
    lesson_a2_16_232: LESSON_A2_16_232_DATA,
    lesson_a2_16_233: LESSON_A2_16_233_DATA,
    lesson_a2_16_234: LESSON_A2_16_234_DATA,
    lesson_a2_16_235: LESSON_A2_16_235_DATA,
    lesson_a2_16_236: LESSON_A2_16_236_DATA,
    lesson_a2_16_237: LESSON_A2_16_237_DATA,
    lesson_a2_16_238: LESSON_A2_16_238_DATA,
    lesson_a2_16_239: LESSON_A2_16_239_DATA,
    lesson_a2_16_240: LESSON_A2_16_240_DATA,
    lesson_a2_17_241: LESSON_A2_17_241_DATA,
    lesson_a2_17_242: LESSON_A2_17_242_DATA,
    lesson_a2_17_243: LESSON_A2_17_243_DATA,
    lesson_a2_17_244: LESSON_A2_17_244_DATA,
    lesson_a2_17_245: LESSON_A2_17_245_DATA,
    lesson_a2_17_246: LESSON_A2_17_246_DATA,
    lesson_a2_17_247: LESSON_A2_17_247_DATA,
    lesson_a2_17_248: LESSON_A2_17_248_DATA,
    lesson_a2_17_249: LESSON_A2_17_249_DATA,
    lesson_a2_17_250: LESSON_A2_17_250_DATA,
    lesson_a2_17_251: LESSON_A2_17_251_DATA,
    lesson_a2_17_252: LESSON_A2_17_252_DATA,
    lesson_a2_17_253: LESSON_A2_17_253_DATA,
    lesson_a2_17_254: LESSON_A2_17_254_DATA,
    lesson_a2_17_255: LESSON_A2_17_255_DATA,
    lesson_a2_18_256: LESSON_A2_18_256_DATA,
    lesson_a2_18_257: LESSON_A2_18_257_DATA,
    lesson_a2_18_258: LESSON_A2_18_258_DATA,
    lesson_a2_18_259: LESSON_A2_18_259_DATA,
    lesson_a2_18_260: LESSON_A2_18_260_DATA,
    lesson_a2_18_261: LESSON_A2_18_261_DATA,
    lesson_a2_18_262: LESSON_A2_18_262_DATA,
    lesson_a2_18_263: LESSON_A2_18_263_DATA,
    lesson_a2_18_264: LESSON_A2_18_264_DATA,
    lesson_a2_18_265: LESSON_A2_18_265_DATA,
    lesson_a2_18_266: LESSON_A2_18_266_DATA,
    lesson_a2_18_267: LESSON_A2_18_267_DATA,
    lesson_a2_18_268: LESSON_A2_18_268_DATA,
    lesson_a2_18_269: LESSON_A2_18_269_DATA,
    lesson_a2_18_270: LESSON_A2_18_270_DATA,
  };

  /**
   * Get target-language aware Course Units for a specific CEFR Level.
   * For English ('en'): returns actual published English units.
   * For Sanskrit ('sa') or un-authored target languages: returns an empty list (0 units),
   * ensuring no English units are shown under other target languages.
   */
  public getUnitsForCEFR(cefr: CEFRLevel, targetLanguage: TargetLanguageCode = 'en'): CourseUnit[] {
    if (targetLanguage !== 'en') {
      return []; // Non-English target languages do not have authored production units yet
    }
    if (cefr !== 'A1' && cefr !== 'A2') return [];
    return CURIOSITY_UNITS.filter((u) => u.cefr === cefr);
  }

  /**
   * Get detailed lesson data if available for given target language
   */
  public getDetailedLesson(lessonId: string, targetLanguage: TargetLanguageCode = 'en'): DetailedLessonData | null {
    if (targetLanguage !== 'en') {
      return null;
    }
    const raw = this.detailedLessons[lessonId];
    if (!raw) return null;

    return {
      ...raw,
      practiceExercises: raw.practiceExercises ? normalizeExercises(raw.practiceExercises) : [],
      reviewExercises: raw.reviewExercises ? normalizeExercises(raw.reviewExercises) : [],
      assessmentExercises: raw.assessmentExercises ? normalizeExercises(raw.assessmentExercises) : [],
    };
  }

  /**
   * Get target language curriculum readiness & authoring status
   */
  public getCurriculumStatus(targetLanguage: TargetLanguageCode = 'en'): {
    status: 'ACTIVE_PRODUCTION' | 'ARCHITECTURAL_READY' | 'PLANNED';
    curriculumState: 'AUTHORED_PRODUCTION' | 'NOT_AUTHORED';
    publishedUnitsCount: number;
    publishedLessonsCount: number;
    plannedUnitsCount: number;
    description: string;
  } {
    if (targetLanguage === 'en') {
      const enUnits = CURIOSITY_UNITS.filter((u) => u.cefr === 'A1' || u.cefr === 'A2');
      const totalLessons = enUnits.reduce((acc, u) => acc + u.lessons.length, 0);
      return {
        status: 'ACTIVE_PRODUCTION',
        curriculumState: 'AUTHORED_PRODUCTION',
        publishedUnitsCount: enUnits.length,
        publishedLessonsCount: totalLessons,
        plannedUnitsCount: enUnits.length,
        description: `English Master Curriculum active with Units 1 to ${enUnits.length} (Lessons 1 to ${totalLessons}, 18 stages each, full A1 & A2 complete coverage and communicative mastery) in full production.`,
      };
    }
    if (targetLanguage === 'sa') {
      return {
        status: 'ARCHITECTURAL_READY',
        curriculumState: 'NOT_AUTHORED',
        publishedUnitsCount: 0,
        publishedLessonsCount: 0,
        plannedUnitsCount: 4,
        description: 'Sanskrit Academy is architectural-ready. Curriculum content has not yet been authored.',
      };
    }
    return {
      status: 'PLANNED',
      curriculumState: 'NOT_AUTHORED',
      publishedUnitsCount: 0,
      publishedLessonsCount: 0,
      plannedUnitsCount: 2,
      description: `${targetLanguage.toUpperCase()} Curriculum planned. No units authored yet.`,
    };
  }

  /**
   * Dynamically calculate lesson inspector metrics directly from lesson data
   */
  public getLessonMetrics(lessonId: string, targetLanguage: TargetLanguageCode = 'en'): LessonInspectorMetrics | null {
    const data = this.getDetailedLesson(lessonId, targetLanguage);
    if (!data) return null;

    const unit = CURIOSITY_UNITS.find((u) => u.id === data.unitId);
    const unitTitle = unit ? unit.title : 'Unit 1: First Words & Essential Greetings';

    const stages = this.getLessonStageSequence(lessonId, targetLanguage);
    const sectionsCount = stages.length;

    const vocabularyCount = data.vocabulary ? data.vocabulary.length : 0;
    const languageChunksCount = data.expressions ? data.expressions.length : 0;
    const grammarTargetsCount =
      (data.grammar?.patterns ? data.grammar.patterns.length : 0) +
      (data.grammar?.verbBeExplanation?.contractionsTable ? data.grammar.verbBeExplanation.contractionsTable.length : 0);

    const exercisesCount = data.practiceExercises ? data.practiceExercises.length : 0;
    const reviewItemsCount = data.reviewExercises ? data.reviewExercises.length : 0;
    const assessmentItemsCount = data.assessmentExercises ? data.assessmentExercises.length : 0;
    const dialoguesCount = data.dialogues ? data.dialogues.length : 0;

    // Combine all exercises to derive dynamic activity counts
    const allEx: Exercise[] = [
      ...(data.practiceExercises || []),
      ...(data.reviewExercises || []),
      ...(data.assessmentExercises || []),
    ];

    const speakingActivitiesCount = allEx.filter(
      (e) => e.type === 'speaking' || e.type === 'speak_sentence'
    ).length;

    const listeningActivitiesCount = allEx.filter(
      (e) => e.type === 'listening' || e.type === 'listen_and_type' || e.type === 'listen_type'
    ).length;

    const totalInteractiveItemsCount =
      vocabularyCount +
      languageChunksCount +
      grammarTargetsCount +
      exercisesCount +
      reviewItemsCount +
      assessmentItemsCount +
      dialoguesCount;

    const canDoStatementsCount = data.learningObjective?.canDoStatements
      ? data.learningObjective.canDoStatements.length
      : 0;

    return {
      lessonId: data.id,
      title: data.title,
      cefr: data.cefr,
      unitTitle,
      sectionsCount,
      vocabularyCount,
      languageChunksCount,
      grammarTargetsCount,
      exercisesCount,
      reviewItemsCount,
      assessmentItemsCount,
      dialoguesCount,
      speakingActivitiesCount,
      listeningActivitiesCount,
      totalInteractiveItemsCount,
      canDoStatementsCount,
    };
  }

  /**
   * Dynamically build the complete 18-stage pedagogical sequence of Lesson 1
   */
  public getLessonStageSequence(lessonId: string, targetLanguage: TargetLanguageCode = 'en'): LessonStageDefinition[] {
    const data = this.getDetailedLesson(lessonId, targetLanguage);
    if (!data) return [];

    return [
      {
        stageNumber: '01',
        id: 'objective',
        title: 'Learning Goals & Can-Do Outcomes',
        category: 'Objective',
        itemCount: data.learningObjective?.canDoStatements?.length || 11,
        description: 'Multi-lingual learning objectives and CEFR A1 Can-Do statements',
        icon: '🎯',
        skillTags: ['reading', 'vocabulary'],
      },
      {
        stageNumber: '02',
        id: 'warmup',
        title: 'Warm-Up & Schema Activation',
        category: 'Objective',
        itemCount: 4,
        description: 'Interactive greeting identification and formal vs informal schema trigger',
        icon: '🔥',
        skillTags: ['listening', 'vocabulary'],
      },
      {
        stageNumber: '03',
        id: 'vocabulary',
        title: 'Core Vocabulary (25 Items)',
        category: 'Vocabulary',
        itemCount: data.vocabulary?.length || 25,
        description: 'Phonetic transcription, audio pronunciation, and multi-lang translations',
        icon: '🔤',
        skillTags: ['vocabulary', 'pronunciation', 'listening'],
      },
      {
        stageNumber: '04',
        id: 'expressions',
        title: 'Language Chunks & Expressions',
        category: 'Vocabulary',
        itemCount: data.expressions?.length || 18,
        description: 'High-frequency formulaic chunks for spoken English introductions',
        icon: '💬',
        skillTags: ['vocabulary', 'speaking', 'interaction'],
      },
      {
        stageNumber: '05',
        id: 'discovery',
        title: 'Grammar Discovery Matrix',
        category: 'Grammar',
        itemCount: 4,
        description: 'Inductive grammar pattern discovery with subject-verb BE alignment',
        icon: '🧠',
        skillTags: ['grammar', 'reading'],
      },
      {
        stageNumber: '06',
        id: 'grammar',
        title: 'Grammar Rules & BE Contractions',
        category: 'Grammar',
        itemCount: (data.grammar?.patterns?.length || 4) + (data.grammar?.verbBeExplanation?.contractionsTable?.length || 8),
        description: 'Explicit grammar mechanics: affirmative, negative, inversion & contractions',
        icon: '📘',
        skillTags: ['grammar', 'writing'],
      },
      {
        stageNumber: '07',
        id: 'mistakes',
        title: 'Common Mistakes & Error Remedies',
        category: 'Grammar',
        itemCount: data.commonMistakes?.length || 8,
        description: 'Targeted remedies for dropped linking verbs and word order errors',
        icon: '⚠️',
        skillTags: ['grammar', 'writing'],
      },
      {
        stageNumber: '08',
        id: 'practice_recognition',
        title: 'Guided Practice: Recognition',
        category: 'Practice',
        itemCount: 8,
        description: 'Multiple choice meaning recognition and vocabulary grounding',
        icon: '👁️',
        skillTags: ['vocabulary', 'reading'],
      },
      {
        stageNumber: '09',
        id: 'practice_listening',
        title: 'Listening & Audio Dictation',
        category: 'Practice',
        itemCount: 8,
        description: 'Audio speech perception and dictation normalizer with native speakers',
        icon: '🎧',
        skillTags: ['listening', 'pronunciation'],
      },
      {
        stageNumber: '10',
        id: 'practice_questions',
        title: 'Question Formation Practice',
        category: 'Practice',
        itemCount: 8,
        description: 'Auxiliary inversion, Wh- question word order tile assembly',
        icon: '❓',
        skillTags: ['grammar', 'writing'],
      },
      {
        stageNumber: '11',
        id: 'dialogues',
        title: 'Realistic Adult Mini Dialogues',
        category: 'Interaction',
        itemCount: data.dialogues?.length || 6,
        description: '6 realistic adult contexts (Campus, Office, Cafe, Park, Call, Onboarding)',
        icon: '🎭',
        skillTags: ['interaction', 'listening', 'speaking'],
      },
      {
        stageNumber: '12',
        id: 'practice_speaking',
        title: 'Speaking & Voice Matching',
        category: 'Practice',
        itemCount: 8,
        description: 'Acoustic voice recording, pronunciation feedback, and sentence oral repetition',
        icon: '🎙️',
        skillTags: ['speaking', 'pronunciation'],
      },
      {
        stageNumber: '13',
        id: 'practice_mediation',
        title: 'Translation & Language Mediation',
        category: 'Practice',
        itemCount: 6,
        description: 'Native source translation to English using word tiles and text input',
        icon: '🌐',
        skillTags: ['mediation', 'writing'],
      },
      {
        stageNumber: '14',
        id: 'practice_mixed',
        title: 'Mixed Interleaved Practice',
        category: 'Practice',
        itemCount: 12,
        description: 'Randomized exercise types for cognitive retention and automaticity',
        icon: '🧩',
        skillTags: ['grammar', 'vocabulary', 'writing'],
      },
      {
        stageNumber: '15',
        id: 'spaced_retrieval',
        title: 'Spaced Retrieval Check',
        category: 'Practice',
        itemCount: 5,
        description: 'Targeted retrieval testing key vocabulary and grammar chunks',
        icon: '🧠',
        skillTags: ['vocabulary', 'grammar'],
      },
      {
        stageNumber: '16',
        id: 'review',
        title: 'Lesson Review & Synthesis',
        category: 'Evaluation',
        itemCount: data.reviewExercises?.length || 10,
        description: 'Pre-assessment synthesis testing all 4 skill domains',
        icon: '🔄',
        skillTags: ['reading', 'writing', 'listening', 'speaking'],
      },
      {
        stageNumber: '17',
        id: 'assessment',
        title: `${data.title} Mastery Assessment`,
        category: 'Evaluation',
        itemCount: data.assessmentExercises?.length || 12,
        description: `Timed assessment evaluating accuracy and mastery of ${data.title} learning objectives`,
        icon: '🏆',
        skillTags: ['reading', 'writing', 'listening', 'speaking', 'grammar'],
      },
      {
        stageNumber: '18',
        id: 'mastery',
        title: 'Mastery & XP Reward',
        category: 'Evaluation',
        itemCount: 1,
        description: 'Final lesson completion badge, XP reward, and progress persistence',
        icon: '👑',
        skillTags: ['vocabulary', 'grammar'],
      },
    ];
  }

  /**
   * Get curriculum assessment hierarchy structure defining scope distinctions
   */
  public getAssessmentHierarchy(): {
    scope: AssessmentScope;
    title: string;
    description: string;
    targetLevel: string;
  }[] {
    return [
      {
        scope: 'lesson',
        title: 'Lesson Assessment',
        description: 'Assesses specific vocabulary, grammar, and expressions taught in the single active lesson.',
        targetLevel: 'Lesson Level',
      },
      {
        scope: 'unit_review',
        title: 'Unit Assessment / Review',
        description: 'Assesses accumulated communicative skills and language patterns across all lessons in a unit.',
        targetLevel: 'Unit Level',
      },
      {
        scope: 'a1_progress',
        title: 'A1 Progress Check',
        description: 'Mid-CEFR level diagnostic evaluating progress and retention across initial completed units.',
        targetLevel: 'CEFR Mid-Level',
      },
      {
        scope: 'cefr_final',
        title: 'A1 Final Assessment',
        description: 'Comprehensive CEFR A1 exit exam evaluating overall Breakthrough competency across all units.',
        targetLevel: 'CEFR Final Level',
      },
    ];
  }

  /**
   * Get CEFR Level level assessments framework (places CEFR Final Assessment at the CEFR level)
   */
  public getCEFRAssessmentFramework(cefrLevel: CEFRLevel): CEFRAssessmentDefinition[] {
    return [
      {
        id: `${cefrLevel.toLowerCase()}_final_assessment`,
        cefrLevel,
        scope: 'cefr_final',
        title: `${cefrLevel} Final CEFR Proficiency Exam`,
        description: `Comprehensive evaluation of all ${cefrLevel} learning objectives, grammar structures, and vocabulary across all units.`,
        estimatedMinutes: 25,
        totalItems: 40,
        unlockedAtPercent: 100,
      },
      {
        id: `${cefrLevel.toLowerCase()}_mid_progress_assessment`,
        cefrLevel,
        scope: 'a1_progress',
        title: `${cefrLevel} Mid-Level Progress Check`,
        description: `Progress diagnostic assessing accumulated competencies across completed units in ${cefrLevel}.`,
        estimatedMinutes: 15,
        totalItems: 20,
        unlockedAtPercent: 50,
      },
    ];
  }

  /**
   * Get exercises for a given stage in Lesson 1 for the Exercise Inspector
   */
  public getExercisesForStage(lessonId: string, stageId: string): Exercise[] {
    const data = this.getDetailedLesson(lessonId);
    if (!data) return [];

    if (stageId === 'review') return data.reviewExercises || [];
    if (stageId === 'assessment') return data.assessmentExercises || [];

    // Filter practice exercises by type matching stage focus
    const allPractice = data.practiceExercises || [];

    if (stageId === 'practice_listening') {
      return allPractice.filter((e) => e.type === 'listening' || e.type === 'listen_and_type');
    }
    if (stageId === 'practice_questions') {
      return allPractice.filter((e) => e.type === 'word_ordering' || e.rawType === 'question_formation');
    }
    if (stageId === 'practice_speaking') {
      return allPractice.filter((e) => e.type === 'speaking');
    }
    if (stageId === 'practice_mediation') {
      return allPractice.filter((e) => e.type === 'translation');
    }
    if (stageId === 'practice_recognition') {
      return allPractice.filter((e) => e.type === 'recognition' || e.type === 'multiple_choice');
    }

    return allPractice.slice(0, 10);
  }
}

export const CurriculumService = new CurriculumServiceManager();
