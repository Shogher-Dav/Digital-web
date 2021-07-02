import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // searchText = new FormControl('');

  isLoggedIn = true;


  questions = [{
    text: 'ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:'
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:'
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:'
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից '
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:'
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է:'
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից '
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից '
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից '
  },
  {
    text: 'ինչը մի անհայտ տպագրիչի կողմից '
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
