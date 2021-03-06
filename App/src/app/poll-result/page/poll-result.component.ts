import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll.model';
import { PollService } from 'src/app/data-services/poll.service';
import { StatusEnum } from 'src/app/models/status.enum';

@Component({
	selector: 'app-poll-result',
	templateUrl: './poll-result.component.html',
	styleUrls: ['./poll-result.component.scss'],
})
export class PollResultComponent implements OnInit {
	public polls: Poll[];
	public loadingPolls = false;
	public statusEnum = StatusEnum;

	constructor(private pollService: PollService) {}

	ngOnInit(): void {
		this.getPolls();
	}

	getPolls(): void {
		this.loadingPolls = true;
		this.pollService.getAll().subscribe(
			(polls: Poll[]) => {
				this.polls = polls;
				this.loadingPolls = false;
			},
			(err) => {
				this.loadingPolls = false;
			}
		);
	}

	onPollSelect(poll: Poll): void {
		console.log(poll);
	}
}
