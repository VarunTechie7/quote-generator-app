import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteGeneratorComponent } from './quote-generator.component';
import { QuoteService } from '../quote.service';
import { of } from 'rxjs';

class MockQuoteService {
  wasCalled = false;

  getRandomQuote() {
    this.wasCalled = true;
    return of('Mocked inspirational quote for testing');
  }
}

describe('QuoteGeneratorComponent', () => {
  let component: QuoteGeneratorComponent;
  let fixture: ComponentFixture<QuoteGeneratorComponent>;
  let mockQuoteService: MockQuoteService;

  beforeEach(async () => {
    mockQuoteService = new MockQuoteService();

    await TestBed.configureTestingModule({
      imports: [QuoteGeneratorComponent],
      providers: [
        { provide: QuoteService, useValue: mockQuoteService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteGeneratorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger ngOnInit and fetch a random quote from the service', () => {
    // Call ngOnInit directly to test the lifecycle hook
    component.ngOnInit();

    // Verify that our mock service method was invoked and quote property updated
    expect(mockQuoteService.wasCalled).toEqual(true);
    expect(component.quote).toEqual('Mocked inspirational quote for testing');
  });

  it('should render the quote in the DOM', () => {
    component.quote = 'Displayed quote text';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const quoteParagraph = compiled.querySelector('.quote-text');
    expect(quoteParagraph?.textContent).toContain('Displayed quote text');
  });
});