import {
    env, // 配置AI模型运行环境
    Tensor, // AI 大模型处理数据的基本单位
    AutoTokenizer, // AI 自行分词器
    SpeechT5ForTextToSpeech, // 文本转语音模型  语音的特征
    SpeechT5HifiGan, // 语音合成模型  和音色合成
} from '@xenova/transformers'
// huggingFace 开源的大模型社区
// 禁用本地大模型，去请求远程的 tts 模型
env.allowLocalModels = false // 禁止本地模型
// transformer.js  文本 -> 语音 tts
// 单例模式  核心难点
// 多次执行tts ai 业务，但是只会实例化一次
class MyTextToSpeechPipeline {
    // AI 语音模型的数据源地址，用于下载不同说话人的声音特征向量
    // 每个字，每个词
    static BASE_URL = 'https://huggingface.co/datasets/Xenova/cmu-arctic-xvectors-extracted/resolve/main/';
    // 文本 -> speecht5_tts 语音特征
    static model_id = "Xenova/speecht5_tts"; // 模型的ID，用于指定要加载的模型
    // 语言特征 -> sppecht5_hifigan  -> 特有的角色音频文件
    static vocoder_id = "/sppecht5_hifigan"; // 语音合成模型的ID，用于指定要加载的语音合成模型
    // 分词器实例
    static tokenizer_id = null;
    // 模型实例
    static model_instance = null; 
    // 合成实例
    static vocoder_instance = null; 
    static async getInstance(progress_callback = null) {
        if(this.tokenizer_id === null) {
            // 之前处理过的大模型，被预先训练过的
            this.tokenizer_id = AutoTokenizer.from_pretrained(this.model_id, {
                progress_callback: progress_callback, // 进度条
            })
        }
    }
}


self.onmessage = async (e) => {
    // console.log(e)
    // ai pipeline 派发一个nlp任务
    // 懒加载  llm 初始化和加载放到第一次任务抵用之时
    const [] = await MyTextToSpeechPipeline.getInstance(x => {
        self.postMessage(x)
    })
}