#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

/*
  more code in the future
*/

#[tauri::command]
fn start() -> u64 {
    return 0;
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
