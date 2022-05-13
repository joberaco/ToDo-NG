export interface Task {
    _id: string;
    title: string;
    notes: string;
    start_time: Date;
    end_time: Date;
    hour_estimate: number;
    completed: boolean;
}