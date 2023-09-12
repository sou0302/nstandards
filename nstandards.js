// ページが読み込まれた際のイベントリスナーを設定
document.addEventListener("DOMContentLoaded", () => {
    // 1から12までのセレクトボックスに対してループ
    for (let i = 1; i <= 12; i++) {
        // 各セレクトボックスとプログレス要素を取得
        const selectBox = document.getElementById(`progress-input-${i}`);
        const progressElement = document.getElementById(`progress${i}`);

        // セレクトボックスの値が変更された際のイベントリスナーを設定
        selectBox.addEventListener("change", () => {
            updateProgress(selectBox, progressElement);
        });

        // マウスホイールが操作された際のイベントリスナーを設定
        selectBox.addEventListener("wheel", (e) => {
            e.preventDefault(); // マウスホイールのデフォルト動作を無効化
            let currentIndex = selectBox.selectedIndex;

            // マウスホイール方向に応じて選択インデックスを変更
            if (e.deltaY > 0 && currentIndex < selectBox.options.length - 1) {
                currentIndex++;
            } else if (e.deltaY < 0 && currentIndex > 0) {
                currentIndex--;
            }

            // 選択インデックスを更新し、プログレスバーを更新する関数を呼び出す
            selectBox.selectedIndex = currentIndex;
            updateProgress(selectBox, progressElement);
        });
    }
});

// プログレスバーを更新する関数
function updateProgress(selectBox, progressElement) {
    // プログレスバーのクラスをリセット
    progressElement.className = progressElement.className.replace(/\bprogress\d+\b/g, '');

    // 選択された値に応じてクラスを設定
    const selectedValue = selectBox.value;
    progressElement.classList.add(`progress${selectedValue}`);
}
