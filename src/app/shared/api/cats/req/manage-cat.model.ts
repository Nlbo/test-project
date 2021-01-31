import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICatModel} from '@api/cats/res/cat.interface';

export class ManageCatModel {
  id = new FormControl('');
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  like = new FormControl([]);
  img = new FormControl('');

  formGroup = new FormGroup({
    name: this.name,
    description: this.description,
    like: this.like,
    img: this.img,
  });

  createModel(): ICatModel {
    return {
      name: this.name.value,
      description: this.description.value,
      like: this.like.value,
      img: this.img.value,
    };
  }

  changeModel(): ICatModel {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      like: this.like.value,
      img: this.img.value,
    };
  }

  disableAllField() {
    this.name.disable();
    this.description.disable();
    this.like.disable();
    this.img.disable();
  }
}
