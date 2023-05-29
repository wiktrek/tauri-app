#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::time::Duration;

#[tauri::command]
async fn start() -> bool {
    println!("waiting");
    // std::thread::sleep(std::time::Duration::from_secs(2));
    tokio::time::sleep(Duration::from_secs(30)).await;
    return true;
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
