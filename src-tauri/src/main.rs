#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::time::Duration;

#[tauri::command]
fn start() -> bool {
    tokio::spawn(async move {
        tokio::time::sleep(Duration::from_secs(300)).await;
        // code goes here
    });

    return false;
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
