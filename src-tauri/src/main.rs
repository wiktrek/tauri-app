#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::time::{Instant, Duration };

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn start(start: bool) -> u64{

    format!("DZIAŁA {}", start);
    println!("{}", start);

    let now = Instant::now();
    stoptimer(now)
}
fn stoptimer(timer: Instant) -> u64{
return timer.elapsed().as_secs()

}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
